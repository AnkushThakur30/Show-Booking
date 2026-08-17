const SHOW_CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function createSeatMap(rows, cols) {
  const seats = {};
  for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
    const row = String.fromCharCode(65 + rowIndex);
    for (let colIndex = 1; colIndex <= cols; colIndex += 1) {
      const id = `${row}${colIndex}`;
      seats[id] = { id, row, col: colIndex, status: 'available', holdBy: null, transaction: null };
    }
  }
  return seats;
}

function getTicketCode() {
  let code = 'SHOW-';
  for (let i = 0; i < 6; i += 1) {
    code += SHOW_CODE_ALPHABET[Math.floor(Math.random() * SHOW_CODE_ALPHABET.length)];
  }
  return code;
}

function initializeShowData(name, type, rows = 8, cols = 10) {
  return {
    id: `show-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    name,
    type,
    rows,
    cols,
    seats: createSeatMap(rows, cols),
    transactionWindowMinutes: 15,
    transactionDeadline: null,
    pendingReservation: null,
    paymentMode: 'pay-at-counter',
    tickets: []
  };
}

function isSeatAvailable(show, seatId) {
  return show.seats[seatId] && show.seats[seatId].status === 'available';
}

function attemptSeatSelection(show, seatId, userId) {
  if (!show.seats[seatId]) {
    return { ok: false, message: 'Seat does not exist.' };
  }

  if (show.seats[seatId].status === 'booked') {
    return { ok: false, message: 'Seat is already booked select any other seat.' };
  }

  if (show.seats[seatId].status === 'pending' && show.seats[seatId].holdBy !== userId) {
    return { ok: false, message: 'Seat is already booked select any other seat.' };
  }

  show.seats[seatId].status = 'pending';
  show.seats[seatId].holdBy = userId;
  show.seats[seatId].transaction = {
    userId,
    startedAt: Date.now(),
    expiresAt: Date.now() + 15 * 60 * 1000
  };

  show.pendingReservation = { seatId, userId, startedAt: Date.now() };

  return {
    ok: true,
    message: 'Seat held for payment. Please complete transaction within 15 minutes.',
    expiresAt: show.seats[seatId].transaction.expiresAt
  };
}

function startTransaction(show, seatId, userId, now = Date.now()) {
  const seat = show.seats[seatId];
  if (!seat) return { ok: false, message: 'Seat not found.' };
  if (seat.status === 'booked') return { ok: false, message: 'Seat is already booked select any other seat.' };

  seat.status = 'pending';
  seat.holdBy = userId;
  seat.transaction = {
    userId,
    startedAt: now,
    expiresAt: now + 15 * 60 * 1000
  };

  return { ok: true, message: 'Transaction window started.', expiresAt: seat.transaction.expiresAt };
}

function completeTransaction(show, seatId, userId) {
  const seat = show.seats[seatId];
  if (!seat) return { ok: false, message: 'Seat not found.' };
  if (seat.status === 'booked') {
    return { ok: false, message: 'Seat is already booked select any other seat.' };
  }
  if (seat.status === 'pending' && seat.holdBy !== userId) {
    return { ok: false, message: 'Seat is already booked select any other seat.' };
  }

  const code = getTicketCode();
  seat.status = 'booked';
  seat.holdBy = userId;
  seat.transaction = null;

  show.tickets.push({
    seatId,
    userId,
    code,
    showName: show.name,
    type: show.type,
    status: 'confirmed'
  });

  show.pendingReservation = null;

  return {
    ok: true,
    code,
    message: `Transaction complete. Your seat is booked. Show code: ${code}`,
    receipt: {
      showName: show.name,
      type: show.type,
      seatId,
      code,
      message: 'Show this receipt at the counter to pay and get the ticket.'
    }
  };
}

function cancelTransaction(show, seatId, userId) {
  const seat = show.seats[seatId];
  if (!seat) return { ok: false, message: 'Seat not found.' };

  if (seat.status === 'booked') {
    return { ok: false, message: 'Seat is already booked select any other seat.' };
  }

  if (seat.holdBy && seat.holdBy !== userId && seat.status === 'pending') {
    return { ok: false, message: 'Seat is already booked select any other seat.' };
  }

  seat.status = 'available';
  seat.holdBy = null;
  seat.transaction = null;
  show.pendingReservation = null;

  return {
    ok: true,
    message: 'Transaction got canceled. Try again and the seat will be available for another person.'
  };
}

function conflictResolution(show, seatId, userIds) {
  const seat = show.seats[seatId];
  if (!seat) return 'not-found';

  seat.status = 'available';
  seat.holdBy = null;
  seat.transaction = null;
  show.pendingReservation = null;

  return 'conflict';
}

module.exports = {
  initializeShowData,
  attemptSeatSelection,
  startTransaction,
  completeTransaction,
  cancelTransaction,
  conflictResolution,
  isSeatAvailable,
  getTicketCode
};
