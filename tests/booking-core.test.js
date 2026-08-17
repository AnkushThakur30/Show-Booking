const test = require('node:test');
const assert = require('node:assert/strict');

const {
  initializeShowData,
  attemptSeatSelection,
  startTransaction,
  completeTransaction,
  cancelTransaction,
  conflictResolution,
  isSeatAvailable,
  getTicketCode
} = require('../booking-core.js');

const show = initializeShowData('Blockbuster Night', 'Movie', 8, 10);

const seatA = 'A1';
const seatB = 'A2';

test('seat selection creates default available seats', () => {
  assert.equal(show.seats[seatA].status, 'available');
  assert.equal(show.seats[seatB].status, 'available');
});

test('single user completes a payment and freezes the seat', () => {
  const selected = attemptSeatSelection(show, seatA, 'user-1');
  assert.equal(selected.ok, true);

  const started = startTransaction(show, seatA, 'user-1');
  assert.equal(started.ok, true);

  const complete = completeTransaction(show, seatA, 'user-1');
  assert.equal(complete.ok, true);
  assert.equal(show.seats[seatA].status, 'booked');
  assert.match(complete.code, /^SHOW-[A-Z0-9]{6}$/);
});

test('seat becomes unavailable when another user tries to book it after someone else completed the payment', () => {
  const show2 = initializeShowData('City Lights', 'Movie', 12, 8);
  const first = attemptSeatSelection(show2, seatA, 'user-1');
  const txn = startTransaction(show2, seatA, 'user-1');
  completeTransaction(show2, seatA, 'user-1');

  const second = attemptSeatSelection(show2, seatA, 'user-2');
  assert.equal(second.ok, false);
  assert.equal(isSeatAvailable(show2, seatA), false);
});

test('simultaneous payment attempts return a conflict result and both are sent back to seat selection', () => {
  const show3 = initializeShowData('Sunset Cinema', 'Movie', 6, 6);
  const first = attemptSeatSelection(show3, seatA, 'user-1');
  const second = attemptSeatSelection(show3, seatA, 'user-2');

  assert.equal(first.ok, true);
  assert.equal(second.ok, false);

  const result = conflictResolution(show3, seatA, ['user-1', 'user-2']);
  assert.equal(result, 'conflict');
  assert.equal(show3.seats[seatA].status, 'available');
});

test('timed out transaction clears the temporary hold and frees the seat', () => {
  const show4 = initializeShowData('Family Night', 'Movie', 4, 4);
  const selected = attemptSeatSelection(show4, seatB, 'user-1');
  assert.equal(selected.ok, true);

  const txn = startTransaction(show4, seatB, 'user-1', Date.now() - 1000 * 60 * 16);
  assert.equal(txn.ok, true);

  const cancelled = cancelTransaction(show4, seatB, 'user-1');
  assert.equal(cancelled.ok, true);
  assert.equal(show4.seats[seatB].status, 'available');
  assert.match(cancelled.message, /transaction.*canceled|canceled.*transaction/i);
});

test('randomized ticket codes are generated with correct format', () => {
  const code = getTicketCode();
  assert.match(code, /^SHOW-[A-Z0-9]{6}$/);
});
