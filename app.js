const shows = [
  {
    id: 'movie-1',
    name: 'Midnight Rush',
    type: 'Movie',
    time: '19:30',
    rows: 8,
    cols: 10,
    genre: 'Action / Thriller',
    rating: 'PG-13',
    duration: '2h 08m',
    description: 'A fearless courier is drawn into a city-wide chase after stealing evidence that could expose a corrupt power network.',
    trailer: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'movie-2',
    name: 'City Lights',
    type: 'Movie',
    time: '21:00',
    rows: 8,
    cols: 10,
    genre: 'Drama / Romance',
    rating: 'PG',
    duration: '1h 52m',
    description: 'Two strangers from opposite ends of the city find each other during a rainy summer when their dreams begin to align.',
    trailer: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'movie-3',
    name: 'Neon Horizon',
    type: 'Movie',
    time: '18:45',
    rows: 8,
    cols: 10,
    genre: 'Sci-Fi / Adventure',
    rating: 'PG-13',
    duration: '2h 16m',
    description: 'An astronaut awakens on a drifting colony and must race against time to restore the lights before the last human stronghold fades.',
    trailer: 'https://www.youtube.com/watch?v=3n7H-8b7Dsk',
    poster: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'movie-4',
    name: 'Royal Drama',
    type: 'Theater',
    time: '20:15',
    rows: 8,
    cols: 10,
    genre: 'Drama / Stage Play',
    rating: 'PG-12',
    duration: '2h 30m',
    description: 'A royal family unravels during a final legacy ceremony as secret loyalties threaten the crown and the kingdom.',
    trailer: 'https://www.youtube.com/watch?v=8bVd6nU3p8Q',
    poster: 'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'movie-5',
    name: 'Storm Warning',
    type: 'Movie',
    time: '17:50',
    rows: 8,
    cols: 10,
    genre: 'Action / Mystery',
    rating: 'R',
    duration: '1h 49m',
    description: 'When a lighthouse keeper disappears during a violent storm, his daughter uncovers a chain of conspiracies hidden beneath the cliffs.',
    trailer: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'movie-6',
    name: 'Velvet Echo',
    type: 'Movie',
    time: '22:10',
    rows: 8,
    cols: 10,
    genre: 'Crime / Drama',
    rating: 'PG-13',
    duration: '2h 21m',
    description: 'A jazz singer returns to her hometown to reopen a condemned club and confront the mob boss who ruined her family.',
    trailer: 'https://www.youtube.com/watch?v=3fumBcKC6RE',
    poster: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'movie-7',
    name: 'Glass Kingdom',
    type: 'Movie',
    time: '16:45',
    rows: 8,
    cols: 10,
    genre: 'Fantasy / Adventure',
    rating: 'PG',
    duration: '2h 01m',
    description: 'A young mapmaker discovers a hidden realm where mirrors reveal the truths no one dares to speak aloud.',
    trailer: 'https://www.youtube.com/watch?v=2Vv-BfVoR4g',
    poster: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'movie-8',
    name: 'The Last Ember',
    type: 'Movie',
    time: '20:00',
    rows: 8,
    cols: 10,
    genre: 'Adventure / Drama',
    rating: 'PG-13',
    duration: '2h 12m',
    description: 'A retired firefighter and a teenager must cross a burning wilderness to deliver one final message before dawn.',
    trailer: 'https://www.youtube.com/watch?v=1FjB2Bv4Jk0',
    poster: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'movie-9',
    name: 'Blue Harbor',
    type: 'Movie',
    time: '18:15',
    rows: 8,
    cols: 10,
    genre: 'Romance / Drama',
    rating: 'PG',
    duration: '1h 58m',
    description: 'In a coastal town with fading memories, a chef rediscovers her love for life through an unlikely friendship with a fisherman.',
    trailer: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'movie-10',
    name: 'Night Circuit',
    type: 'Movie',
    time: '21:35',
    rows: 8,
    cols: 10,
    genre: 'Cyberpunk / Action',
    rating: 'R',
    duration: '2h 05m',
    description: 'A rogue driver hacks the city’s electric grid and leads a rebellion through a maze of glowing towers and underground tunnels.',
    trailer: 'https://www.youtube.com/watch?v=8Qn_spdM7eE',
    poster: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'movie-11',
    name: 'Silent Bloom',
    type: 'Movie',
    time: '15:30',
    rows: 8,
    cols: 10,
    genre: 'Comedy / Family',
    rating: 'G',
    duration: '1h 41m',
    description: 'A shy florist and a mischievous kid form an unlikely duo to turn a forgotten garden into the neighborhood’s favorite place.',
    trailer: 'https://www.youtube.com/watch?v=4eB8tFq2zEw',
    poster: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'movie-12',
    name: 'White Echo',
    type: 'Movie',
    time: '19:15',
    rows: 8,
    cols: 10,
    genre: 'Mystery / Thriller',
    rating: 'PG-13',
    duration: '2h 04m',
    description: 'An investigative journalist follows a series of anonymous recordings that lead to the story of a town erased from official history.',
    trailer: 'https://www.youtube.com/watch?v=JGwWNGJdvx8',
    poster: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'movie-13',
    name: 'Sunset Avenue',
    type: 'Movie',
    time: '17:15',
    rows: 8,
    cols: 10,
    genre: 'Drama / Indie',
    rating: 'PG',
    duration: '1h 46m',
    description: 'Three siblings reunite in their childhood neighborhood and discover that the family bakery hides a secret worth saving.',
    trailer: 'https://www.youtube.com/watch?v=7pQQHnqBa2E',
    poster: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'movie-14',
    name: 'Iron Tide',
    type: 'Movie',
    time: '20:40',
    rows: 8,
    cols: 10,
    genre: 'Action / War',
    rating: 'R',
    duration: '2h 18m',
    description: 'A naval engineer must stop a rogue weapons experiment from detonating a chain of sea-based disasters across the coast.',
    trailer: 'https://www.youtube.com/watch?v=6DhiiFGk4_s',
    poster: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'movie-15',
    name: 'Paper Skies',
    type: 'Movie',
    time: '18:30',
    rows: 8,
    cols: 10,
    genre: 'Animation / Family',
    rating: 'G',
    duration: '1h 36m',
    description: 'A paper airplane gains a mind of its own and journeys across impossible cloud cities to deliver hope to a lonely child.',
    trailer: 'https://www.youtube.com/watch?v=8m4kIxi3D9M',
    poster: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'movie-16',
    name: 'Afterglow',
    type: 'Movie',
    time: '21:20',
    rows: 8,
    cols: 10,
    genre: 'Sci-Fi / Romance',
    rating: 'PG-13',
    duration: '2h 11m',
    description: 'A time-lost programmer finds a second chance with the woman who may be the only person who remembers the future she left behind.',
    trailer: 'https://www.youtube.com/watch?v=0m9frc0n2lI',
    poster: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'
  }
];

const AUTH_KEY = 'showbook-users';
const SESSION_KEY = 'showbook-session';

const state = {
  selectedShowId: shows[0].id,
  selectedSeatId: null,
  currentUser: 'Guest',
  seats: {},
  countdownEnd: null,
  timerId: null,
  message: 'Select a show and click any available seat to start the 15-minute transaction window.'
};

const elements = {
  authScreen: document.getElementById('authScreen'),
  appScreen: document.getElementById('appScreen'),
  showList: document.getElementById('showList'),
  seatMap: document.getElementById('seatMap'),
  countdown: document.getElementById('countdown'),
  statusMessage: document.getElementById('statusMessage'),
  selectedShowLabel: document.getElementById('selectedShowLabel'),
  selectedSeatLabel: document.getElementById('selectedSeatLabel'),
  seatStatusLabel: document.getElementById('seatStatusLabel'),
  paymentMode: document.getElementById('paymentMode'),
  payButton: document.getElementById('payButton'),
  resetButton: document.getElementById('resetButton'),
  logoutButton: document.getElementById('logoutButton'),
  loggedUserLabel: document.getElementById('loggedUserLabel'),
  authMessage: document.getElementById('authMessage'),
  loginForm: document.getElementById('loginForm'),
  signupForm: document.getElementById('signupForm'),
  forgotForm: document.getElementById('forgotForm')
};

function getUsers() {
  const users = JSON.parse(localStorage.getItem(AUTH_KEY) || 'null');
  if (users && users.length) return users;

  const seedUsers = [{ name: 'Demo User', email: 'demo@showbook.com', password: 'password123' }];
  localStorage.setItem(AUTH_KEY, JSON.stringify(seedUsers));
  return seedUsers;
}

function setSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ email: user.email, name: user.name }));
  state.currentUser = user.name;
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
  state.currentUser = 'Guest';
}

function getCurrentSession() {
  const session = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
  return session;
}

function showAuthScreen() {
  elements.authScreen.classList.add('active');
  elements.appScreen.classList.add('hidden');
}

function showAppScreen() {
  elements.authScreen.classList.remove('active');
  elements.appScreen.classList.remove('hidden');
}

function setAuthMessage(message, type = 'info') {
  elements.authMessage.textContent = message;
  elements.authMessage.className = `auth-message ${type}`;
}

function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.tab === tabName);
  });

  document.querySelectorAll('.auth-form').forEach((form) => {
    form.classList.toggle('active', form.id === `${tabName}Form`);
  });
}

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const users = getUsers();
  const user = users.find((item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password);

  if (!user) {
    setAuthMessage('Invalid email or password. Please try again.', 'error');
    return;
  }

  setSession(user);
  setAuthMessage('Login successful. Welcome back!', 'success');
  renderLoggedUser();
  showAppScreen();
}

function handleSignup(event) {
  event.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;

  if (!name || !email || !password) {
    setAuthMessage('Please complete all sign-up fields.', 'error');
    return;
  }

  const users = getUsers();
  if (users.some((item) => item.email.toLowerCase() === email.toLowerCase())) {
    setAuthMessage('An account with this email already exists.', 'error');
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem(AUTH_KEY, JSON.stringify(users));
  setAuthMessage('Account created successfully. You can now log in.', 'success');
  document.getElementById('signupForm').reset();
  switchTab('login');
}

function handleForgot(event) {
  event.preventDefault();
  const email = document.getElementById('forgotEmail').value.trim();
  const users = getUsers();

  if (!users.some((item) => item.email.toLowerCase() === email.toLowerCase())) {
    setAuthMessage('No account was found for this email.', 'error');
    return;
  }

  setAuthMessage('Reset link sent successfully. Check your inbox.', 'success');
  document.getElementById('forgotForm').reset();
  switchTab('login');
}

function renderLoggedUser() {
  const session = getCurrentSession();
  if (session) {
    elements.loggedUserLabel.textContent = session.name;
    state.currentUser = session.name;
  } else {
    elements.loggedUserLabel.textContent = 'Guest';
    state.currentUser = 'Guest';
  }
}

function handleLogout() {
  clearSession();
  renderLoggedUser();
  showAuthScreen();
  setAuthMessage('You have been logged out successfully.', 'success');
  document.getElementById('loginForm').reset();
  document.getElementById('signupForm').reset();
  document.getElementById('forgotForm').reset();
  switchTab('login');
}

function generateSeatMap(rows, cols) {
  const seats = {};
  for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
    const rowLetter = String.fromCharCode(65 + rowIndex);
    for (let colIndex = 1; colIndex <= cols; colIndex += 1) {
      const seatId = `${rowLetter}${colIndex}`;
      seats[seatId] = {
        id: seatId,
        status: 'available',
        heldBy: null,
        holdUntil: null,
        code: null
      };
    }
  }
  return seats;
}

function getSelectedShow() {
  return shows.find((show) => show.id === state.selectedShowId) || shows[0];
}

function setMessage(msg, tone = 'info') {
  state.message = msg;
  elements.statusMessage.textContent = msg;
  elements.statusMessage.className = 'status-box ' + tone;
}

function renderShowList() {
  elements.showList.innerHTML = shows
    .map(
      (show) => `
        <button class="show-card ${show.id === state.selectedShowId ? 'selected' : ''}" data-show-id="${show.id}">
          <img class="show-poster" src="${show.poster}" alt="${show.name} poster" />
          <div class="show-card-content">
            <div class="show-topline">
              <span class="show-type">${show.type}</span>
              <span class="show-rating">${show.rating}</span>
            </div>
            <h3>${show.name}</h3>
            <div class="show-meta">
              <span>${show.genre}</span>
              <span>${show.time}</span>
            </div>
            <p class="show-description">${show.description}</p>
            <a class="trailer-link" href="${show.trailer}" target="_blank" rel="noopener noreferrer">Watch trailer</a>
          </div>
        </button>
      `
    )
    .join('');

  elements.showList.querySelectorAll('.show-card').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedShowId = button.dataset.showId;
      resetShowSeats();
      renderAll();
    });
  });
}

function resetShowSeats() {
  const show = getSelectedShow();
  state.seats = generateSeatMap(show.rows, show.cols);
  state.selectedSeatId = null;
  state.countdownEnd = null;
  stopTimer();
  updateCountdownLabel();
  elements.selectedSeatLabel.textContent = 'None';
  elements.seatStatusLabel.textContent = 'Available';
}

function updateCountdownLabel() {
  if (!state.countdownEnd) {
    elements.countdown.textContent = '15:00';
    return;
  }

  const remainingMs = Math.max(state.countdownEnd - Date.now(), 0);
  const totalSeconds = Math.ceil(remainingMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  elements.countdown.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  stopTimer();
  state.timerId = window.setInterval(() => {
    updateCountdownLabel();
    if (!state.countdownEnd) {
      stopTimer();
      return;
    }

    if (Date.now() >= state.countdownEnd) {
      releasePendingSeat();
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function releasePendingSeat() {
  const seat = state.selectedSeatId ? state.seats[state.selectedSeatId] : null;
  if (!seat || seat.status !== 'pending') {
    state.countdownEnd = null;
    updateCountdownLabel();
    return;
  }

  seat.status = 'available';
  seat.heldBy = null;
  seat.holdUntil = null;
  state.countdownEnd = null;
  stopTimer();
  setMessage('Transaction got canceled. Try again and the seat will be available for another person.', 'warning');
  renderSeatMap();
}

function renderSeatMap() {
  const show = getSelectedShow();
  const rows = [];

  for (let rowIndex = 0; rowIndex < show.rows; rowIndex += 1) {
    const rowLetter = String.fromCharCode(65 + rowIndex);
    const rowSeats = [];
    for (let colIndex = 1; colIndex <= show.cols; colIndex += 1) {
      const seatId = `${rowLetter}${colIndex}`;
      const seat = state.seats[seatId];
      const seatClass = [
        'seat',
        seat.status === 'pending' ? 'pending' : '',
        seat.status === 'booked' ? 'booked' : '',
        seatId === state.selectedSeatId ? 'selected' : ''
      ].filter(Boolean).join(' ');

      const button = document.createElement('button');
      button.type = 'button';
      button.className = seatClass;
      button.textContent = colIndex;
      button.disabled = seat.status === 'booked';
      button.addEventListener('click', () => handleSeatClick(seatId));
      rowSeats.push(button);
    }

    const rowWrapper = document.createElement('div');
    rowWrapper.className = 'seat-row';
    const label = document.createElement('span');
    label.className = 'row-label';
    label.textContent = rowLetter;
    rowWrapper.appendChild(label);
    rowSeats.forEach((seatButton) => rowWrapper.appendChild(seatButton));
    rows.push(rowWrapper);
  }

  elements.seatMap.innerHTML = '';
  rows.forEach((row) => elements.seatMap.appendChild(row));

  const selectedSeat = state.selectedSeatId ? state.seats[state.selectedSeatId] : null;
  const currentShow = getSelectedShow();
  elements.selectedShowLabel.textContent = `${currentShow.name} (${currentShow.type})`;
  elements.selectedSeatLabel.textContent = state.selectedSeatId || 'None';
  elements.seatStatusLabel.textContent = selectedSeat ? selectedSeat.status : 'Available';

  if (state.selectedSeatId && selectedSeat && selectedSeat.status === 'pending') {
    elements.seatStatusLabel.textContent = `Pending (${selectedSeat.heldBy})`;
  }

  const selectedShowInfo = document.getElementById('selectedShowInfo');
  if (selectedShowInfo) {
    selectedShowInfo.innerHTML = `
      <div class="detail-header">
        <div>
          <p class="detail-label">Now selected</p>
          <h3>${currentShow.name}</h3>
        </div>
        <span class="show-rating compact">${currentShow.rating}</span>
      </div>
      <p class="detail-meta">${currentShow.genre} · ${currentShow.duration} · ${currentShow.time}</p>
      <p>${currentShow.description}</p>
      <a class="trailer-link detail" href="${currentShow.trailer}" target="_blank" rel="noopener noreferrer">Watch trailer</a>
    `;
  }
}

function handleSeatClick(seatId) {
  const seat = state.seats[seatId];
  const user = state.currentUser;

  if (!seat) return;
  if (seat.status === 'booked' || (seat.status === 'pending' && seat.heldBy !== user)) {
    setMessage('Seat is already booked select any other seat.', 'error');
    return;
  }

  if (seat.status === 'pending' && seat.heldBy === user) {
    state.selectedSeatId = seatId;
    setMessage(`Seat ${seatId} is already held for ${user}. Continue payment or choose another seat.`, 'warning');
    renderSeatMap();
    return;
  }

  state.selectedSeatId = seatId;
  seat.status = 'pending';
  seat.heldBy = user;
  seat.holdUntil = Date.now() + 15 * 60 * 1000;
  state.countdownEnd = seat.holdUntil;
  startTimer();
  setMessage(`Seat ${seatId} has been selected. Complete payment within 15 minutes.`, 'warning');
  renderSeatMap();
}

function getRandomCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = 'SHOW-';
  for (let i = 0; i < 6; i += 1) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return code;
}

function createReceiptPdf(details) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text('ShowBook Receipt', 14, 20);
  doc.setFontSize(12);
  doc.text(`Show: ${details.showName}`, 14, 38);
  doc.text(`Type: ${details.type}`, 14, 48);
  doc.text(`Seat: ${details.seatId}`, 14, 58);
  doc.text(`Code: ${details.code}`, 14, 68);
  doc.text('Show this receipt at the counter to pay and get the ticket.', 14, 88);
  doc.save(`receipt-${details.seatId}.pdf`);
}

function payAtCounter() {
  if (!state.selectedSeatId) {
    setMessage('Please select a seat before making payment.', 'warning');
    return;
  }

  const seat = state.seats[state.selectedSeatId];
  const user = state.currentUser;

  if (!seat || seat.status === 'booked') {
    setMessage('Seat is already booked select any other seat.', 'error');
    return;
  }

  if (seat.status === 'pending' && seat.heldBy !== user) {
    setMessage('Seat is already booked select any other seat.', 'error');
    return;
  }

  const code = getRandomCode();
  const show = getSelectedShow();
  const details = {
    showName: show.name,
    type: show.type,
    seatId: state.selectedSeatId,
    code,
    user
  };

  seat.status = 'booked';
  seat.heldBy = user;
  seat.code = code;
  state.countdownEnd = null;
  stopTimer();

  const mode = elements.paymentMode.value;

  if (mode === 'code') {
    setMessage(`The seat is booked. Show/provide the code below at the counter to pay and get the ticket: ${code}`, 'success');
  } else {
    createReceiptPdf(details);
    setMessage(`Receipt generated. Show this receipt at the counter to pay and get the ticket. Code: ${code}`, 'success');
  }

  renderSeatMap();
}

function handleReset() {
  state.selectedSeatId = null;
  const show = getSelectedShow();
  state.seats = generateSeatMap(show.rows, show.cols);
  state.countdownEnd = null;
  stopTimer();
  updateCountdownLabel();
  setMessage('Seat selection refreshed. Please choose another seat.', 'info');
  renderSeatMap();
}

function renderAll() {
  renderShowList();
  resetShowSeats();
  renderSeatMap();
  elements.selectedShowLabel.textContent = `${getSelectedShow().name} (${getSelectedShow().type})`;
}

function initAuth() {
  const session = getCurrentSession();
  if (session) {
    state.currentUser = session.name;
    renderLoggedUser();
    showAppScreen();
  } else {
    showAuthScreen();
  }

  document.querySelectorAll('.tab-btn').forEach((button) => {
    button.addEventListener('click', () => switchTab(button.dataset.tab));
  });

  elements.loginForm.addEventListener('submit', handleLogin);
  elements.signupForm.addEventListener('submit', handleSignup);
  elements.forgotForm.addEventListener('submit', handleForgot);
  elements.logoutButton.addEventListener('click', handleLogout);
}

renderLoggedUser();
initAuth();
renderAll();

elements.payButton.addEventListener('click', payAtCounter);
elements.resetButton.addEventListener('click', handleReset);
