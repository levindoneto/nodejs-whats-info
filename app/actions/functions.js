var WhatsAppUser = require('../../model/user.js')

/** Function for adding a whatsapp user to the database.
 *  @param  {WhatsAppUser} model.
 *  @param  {Function} callback.
 *  @return {void}.
 */
module.exports.addWhatsAppUser = function(whatsAppUser, callback) {
  WhatsAppUser.create(whatsAppUser, callback);
};

/** Function for getting whatsapp users from the database.
 *  @param  {Integer} restriction of number of users to get.
 *  @param  {Function} callback.
 *  @return {void}.
 */
module.exports.getWhatsAppUsers = function(restriction, callback) {
  WhatsAppUser.find(callback)
              .limit(restriction); 
}

/** Function for getting a whatsapp user by their id from the database.
 *  @param  {String} id of the whatsapp user.
 *  @param  {Function} callback.
 *  @return {void}.
 */
module.exports.getWhatsAppUserById = function(id, callback) {
  WhatsAppUser.findById(id, callback);
}

