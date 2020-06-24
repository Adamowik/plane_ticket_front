import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  changeTheme: string;
  changeLanguage: string;
  login: string;
  register: string;
  language: string;
  insurance: string;
  profile: string;
  logout: string;
  arrivalAirport: string;
  departureAirport: string;
  chooseCategory: string;
  howManyPassengers: string;
  chooseDepartureDate: string;
  search: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
  iAgree: string;
  registerMe: string;
  dontHaveAcc: string;
  editProfile: string;
  showTickets: string;
  showPlaces: string;
  yourTickets: string;
  date: string;
  showTicket: string;
  ticket: string;
  number: string;
  from: string;
  to: string;
  pesel: string;
  price: string;
  phoneNumber: string;
  departureDate: string;
  departureHour: string;
  arrivalDate: string;
  arrivalHour: string;
  row: string;
  place: string;
  class: string;
  flightInsurance: string;
  weGuarantee: string;
  luggageLost: string;
  steal: string;
  treatmentCosts: string;
  helpIfAccident: string;
  helpIfDelayed: string;
  refundIfAccident: string;
  informFamily: string;
  insuranceCostIsOnly: string;
  depart: string;
  arrive: string;
  freePlaces: string;
  buyTickets: string;
  choose: string;
  nPlaces: string;
  chosenPlaces: string;
  occuped: string;
  clearYourChoice: string;
  goNext: string;
  doYouWantInsurance: string;
  nameDemanded: string;
  surnameDemanded: string;
  loginDemanded: string;
  emailDemanded: string;
  passwordDemanded: string;
  confirm: string;
  goToSummary: string;
  summaryOfPurchase: string;
  sum: string;
  pay: string;
  paymentDone: string;
  username: string;
  adminPanel: string;
  peselDemanded: string;
  phoneNumberDemanded: string;
  no: string;
  yes: string;
  otherClass: string;
  loggedAs: string;
  loginError: string;
  enterValidPhoneNumber: string;
  enterValidEmail: string;
  makeChanges: string;
  areYouSureToMakeChanges: string;
  plane: string;
  registerCompleted: string;
  passwordLength: string;
  passwordsNotSame: string;
  registerFailed: string;
  firstClass: string;
  secondClass: string;
  users: string;
  connections: string;
  planes: string;
  flights: string;
  nameOf: string;
  ticketCost: string;
  connectionID: string;
  planeID: string;
  addFlight: string;
  youAreLoggedAs: string;
  ticketsWillBeSend: string;
  andAccessable: string;
  noOfTickets: string;
  nowYouCant: string;
  loginLowerCase: string;
  deleteFlight: string;
  flightRemoved: string;
  goBack: string;
  wrongDate: string;
  noFlightsFound: string;
  flightAdded: string;
  flightSearchResults: string;


  constructor() { }

  setLanguage(language: string) {
    this.language = language;
    if (this.language === 'pl') {
      this.adminPanel = 'Admin';
      this.username = 'Login';
      this.changeLanguage = 'Zmien język';
      this.changeTheme = 'Zmien motyw';
      this.login = 'Zaloguj się';
      this.register = 'Zarejestruj się';
      this.insurance = 'Ubezpieczenie';
      this.profile = 'Profil';
      this.logout = 'Wyloguj się';
      this.insurance = 'Ubezpieczenie';
      this.profile = 'Profil';
      this.logout = 'Wyloguj się';
      this.arrivalAirport = 'Lotnisko przylotu';
      this.departureAirport = 'Lotnisko wylotu';
      this.chooseCategory = 'Wybierz kategorię';
      this.howManyPassengers = 'Liczba pasażerow';
      this.chooseDepartureDate = 'Wybierz datę wylotu';
      this.search = 'Wyszukaj lot';
      this.name = 'Imię';
      this.surname = 'Nazwisko';
      this.email = 'E-mail';
      this.password = 'Haslo';
      this.confirmPassword = 'Powtorz hasło';
      this.iAgree = 'Wyrażam zgodę na przetwarzanie danych osobowych';
      this.registerMe = 'Zarejestruj';
      this.dontHaveAcc = 'Nie masz konta?';
      this.editProfile = 'Edytuj profil';
      this.showTickets = 'Pokaż bilety';
      this.showPlaces = 'Zobacz miejsca';
      this.yourTickets = 'Twoje bilety';
      this.date = 'Data';
      this.showTicket = 'Pokaż bilet';
      this.number = 'numer';
      this.from = 'Z';
      this.to = 'Do';
      this.pesel = 'PESEL';
      this.price = 'Cena';
      this.phoneNumber = 'Numer telefonu';
      this.departureDate = 'Data wylotu';
      this.departureHour = 'Czas wylotu';
      this.arrivalDate = 'Data przylotu';
      this.arrivalHour = 'Czas przylotu';
      this.row = 'Rząd';
      this.place = 'Miejsce';
      this.class = 'Klasa';
      this.flightInsurance = 'Ubezpieczenie lotu';
      this.weGuarantee = 'Gwarantujemy';
      this.luggageLost = 'Ubezpieczenie od uszkodzonego bagażu';
      this.steal = 'Ubezpieczenie od kradzieży';
      this.treatmentCosts = 'Ubezpieczenie zdrowotne - lekarz oraz zwrot kosztow leczenia';
      this.helpIfAccident = 'Pomoc w przypadku wypadku';
      this.helpIfDelayed = 'Ochrona w przypadku opoźnienia lotu';
      this.refundIfAccident = 'Zwrot kosztow biletu w razie nagłego wypadku';
      this.informFamily = 'Poinformowanie rodziny w razie wypadku';
      this.insuranceCostIsOnly = 'Koszt ubezpieczenia dla jednego biletu: 40 zł';
      this.depart = 'Wylot';
      this.arrive = 'Przylot';
      this.freePlaces = 'Wolne miejsca';
      this.buyTickets = 'Kup bilety';
      this.choose = 'Wybierz';
      this.nPlaces = 'miejsc(a)';
      this.chosenPlaces = 'Wybrane miejsca';
      this.occuped = 'Zajęte';
      this.clearYourChoice = 'Wyczysc wybor';
      this.goNext = 'Przejdz dalej';
      this.doYouWantInsurance = 'Czy chcesz skorzystać z ubezpieczenia?';
      this.nameDemanded = 'Imię jest wymagane';
      this.surnameDemanded = 'Nazwisko jest wymagane';
      this.loginDemanded = 'Login jest wymagany';
      this.emailDemanded = 'E-mail jest wymagany';
      this.peselDemanded = 'PESEL jest wymagany';
      this.passwordDemanded = 'Hasło jest wymagane';
      this.phoneNumberDemanded = 'Numer telefonu jest wymagany';
      this.confirm = 'Potwierdź';
      this.goToSummary = 'Przejdź do podsumowania';
      this.summaryOfPurchase = 'Podsumowanie zamowienia';
      this.sum = 'Suma';
      this.pay = 'Zapłać';
      this.paymentDone = 'Płatnosc zrealizowana';
      this.no = 'Nie';
      this.yes = 'Tak';
      this.otherClass = 'Inna klasa';
      this.loggedAs = 'Zalogowano.';
      this.loginError = 'Logowanie nie udało się. Zła nazwa użytkownika i/lub hasło. Sprobuj ponownie.';
      this.enterValidPhoneNumber = 'Wprowadź poprawny numer telefonu';
      this.enterValidEmail = 'Wprowadź poprawny adres e-mail';
      this.makeChanges = 'Wprowadź zmiany';
      this.areYouSureToMakeChanges = 'Czy jestes pewny/pewna?';
      this.plane = 'Samolot';
      this.registerCompleted = 'Rejestracja przebiegła pomyslnie! Teraz możesz się zalogować';
      this.passwordLength = 'Hasło musi posiadać co najmniej 9 znakow';
      this.passwordsNotSame = 'Hasła roznią się';
      // tslint:disable-next-line:max-line-length
      this.registerFailed = 'Rejestracja nie powiodła się. Login jest już zajęty, lub istnieje w bazie danych konto o podanym adresie e-mail.';
      this.firstClass = 'Pierwsza klasa';
      this.secondClass = 'Druga klasa';
      this.ticket = 'Bilet';
      this.users = 'Użytkownicy';
      this.planes = 'Samoloty';
      this.connections = 'Połączenia';
      this.nameOf = 'Nazwa';
      this.flights = 'Loty';
      this.ticketCost = 'Cena biletu';
      this.connectionID = 'ID połączenia';
      this.planeID = 'ID samolotu';
      this.addFlight = 'Dodaj lot';
      this.youAreLoggedAs = 'Witaj';
      this.ticketsWillBeSend = 'Bilety zostały wysłane na adres e-mail';
      this.andAccessable = 'Oraz są dostępne w Twoim profilu w zakładce "Zobacz biety"';
      this.noOfTickets = 'Liczba biletow';
      this.nowYouCant = 'Teraz możesz jedynie obejrzeć wolne miejsca. Aby moc kupowac bilety';
      this.loginLowerCase = 'zaloguj się.';
      this.deleteFlight = 'Usun lot';
      this.flightRemoved = 'Lot został usunięty';
      this.goBack = 'Wroc do listy lotow';
      this.wrongDate = 'Wybrałes datę wczesniejszą niż dzien jutrzejszy.';
      this.noFlightsFound = 'Nie znaleziono lotow o podanych kryteriach wyszukiwania.';
      this.flightAdded = 'Lot został dodany.';
      this.flightSearchResults = 'Wyniki wyszukiwania';

    } else if (language === 'en') {
      this.adminPanel = 'Admin';
      this.username = 'Username';
      this.changeLanguage = 'Change language';
      this.changeTheme = 'Change theme';
      this.login = 'Sign in';
      this.register = 'Sign up';
      this.profile = 'Profile';
      this.logout = 'Sign out';
      this.insurance = 'Insurance';
      this.arrivalAirport = 'Arrival airport';
      this.departureAirport = 'Departure airport';
      this.chooseCategory = 'Choose category';
      this.howManyPassengers = 'Passengers number';
      this.chooseDepartureDate = 'Choose departure date';
      this.search = 'Search for flight';
      this.name = 'Name';
      this.surname = 'Surname';
      this.email = 'E-mail';
      this.password = 'Password';
      this.confirmPassword = 'Confirm password';
      this.iAgree = 'I hereby consent to my personal data being processed';
      this.registerMe = 'Create account';
      this.dontHaveAcc = 'You dont have account?';
      this.editProfile = 'Profile edit';
      this.showTickets = 'Show tickets';
      this.showPlaces = 'Show places';
      this.yourTickets = 'Your tickets';
      this.date = 'Date';
      this.showTicket = 'Show ticket';
      this.number = 'number';
      this.from = 'From';
      this.to = 'To';
      this.pesel = 'PESEL';
      this.price = 'Price';
      this.phoneNumber = 'Phone number';
      this.departureDate = 'Departure date';
      this.departureHour = 'Departure time';
      this.arrivalDate = 'Arrival date';
      this.arrivalHour = 'Arrival time';
      this.row = 'Row';
      this.place = 'Place';
      this.class = 'Class';
      this.flightInsurance = 'Flight insurance';
      this.weGuarantee = 'We guarantee';
      this.luggageLost = 'Insurance in case of damaged luggage';
      this.steal = 'Insurance in case of theft';
      this.treatmentCosts = 'Health insurance - doctor appointment and treatment cost refund';
      this.helpIfAccident = 'Assistance in case of accident';
      this.helpIfDelayed = 'Protection in the event of a delay in a flight';
      this.refundIfAccident = 'Ticket cost refund in the event of an accident';
      this.informFamily = 'Informing your family in the event of an accident';
      this.insuranceCostIsOnly = 'Cost of insurance is 40 zł per ticket';
      this.depart = 'Departure';
      this.arrive = 'Arrival';
      this.freePlaces = 'Free places';
      this.buyTickets = 'Buy tickets';
      this.choose = 'Choose';
      this.nPlaces = 'place(s)';
      this.chosenPlaces = 'Chosen places';
      this.occuped = 'Occuped';
      this.clearYourChoice = 'Clear choice';
      this.goNext = 'Next';
      this.doYouWantInsurance = 'Would you like to take out an insurance?';
      this.nameDemanded = 'Name is required';
      this.surnameDemanded = 'Surname is required';
      this.loginDemanded = 'Username is required';
      this.emailDemanded = 'E-mail is required';
      this.passwordDemanded = 'Password is required';
      this.peselDemanded = 'PESEL is required';
      this.phoneNumberDemanded = 'Phone number is required';
      this.confirm = 'Confirm';
      this.goToSummary = 'Go to summary';
      this.summaryOfPurchase = 'Order summary';
      this.sum = 'Sum';
      this.pay = 'Pay';
      this.paymentDone = 'Payment realised';
      this.no = 'No';
      this.yes = 'Yes';
      this.otherClass = 'Other class';
      this.loggedAs = 'You are signed in now.';
      this.loginError = 'Login failed. Wrong username or/and password. Try again.';
      this.enterValidPhoneNumber = 'Enter valid phone number';
      this.enterValidEmail = 'Enter valid e-mail adress';
      this.makeChanges = 'Submit changes';
      this.areYouSureToMakeChanges = 'Are you sure?';
      this.plane = 'Plane';
      this.registerCompleted = 'Account created successfully! Now you can sign in.';
      this.passwordLength = 'Password must be at least 9 charachters long';
      this.passwordsNotSame = 'Passwords are not the same';
      this.registerFailed = 'Creating new account failed. Username or account with e-mail you provided already exists. Try again.';
      this.firstClass = 'First class';
      this.secondClass = 'Second class';
      this.ticket = 'Ticket';
      this.users = 'Users';
      this.planes = 'Planes';
      this.connections = 'Connections';
      this.nameOf = 'Name';
      this.flights = 'Flights';
      this.ticketCost = 'Ticket cost';
      this.connectionID = 'Connection ID';
      this.planeID = 'Plane ID';
      this.addFlight = 'Add flight';
      this.youAreLoggedAs = 'Hello';
      this.ticketsWillBeSend = 'Tickets has been sent to e-mail adress';
      this.andAccessable = 'They could be seen also in bookmark "Show tickets" in your profile';
      this.noOfTickets = 'Number of tickets';
      this.nowYouCant = 'Now you can only see places, to buy tickets';
      this.loginLowerCase = 'sign in.';
      this.deleteFlight = 'Delete flight';
      this.flightRemoved = 'Flight has been deleted';
      this.goBack = 'Go back to the flights list';
      this.wrongDate = 'You have choosen date earlier than tomorrow.';
      this.noFlightsFound = 'No flights found with your criterias.';
      this.flightAdded = 'Flight has been added.';
      this.flightSearchResults = 'Flight search results';
    }
  }

  getLanguage(): string {
    return this.language;
  }
}
