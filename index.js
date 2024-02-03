const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = 'bratu93';
var password = process.env.password;
var shared_secret = process.env.shared;

var games = [730, 440, 570];  // Digite aqui os AppIDs dos jogos que você deseja.
var status = 1;               // 1 - online, 7 - invisível

user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Logado com Sucesso');
	user.setPersona(status);               
	user.gamesPlayed(games);
});
