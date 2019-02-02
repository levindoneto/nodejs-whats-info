var WhatsAppUser = require('../../model/user.js')

/** Function for adding a whatsapp user to the database.
 *  @param  {WhatsAppUser} model.
 *  @param  {Function} callback.
 *  @return {void}.
 */
module.exports.addWhatsAppUser = function(whatsAppUser, callback) {
  WhatsAppUser.create(whatsAppUser, callback);
};
