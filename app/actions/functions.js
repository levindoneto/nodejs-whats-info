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

/** Function for getting a whatsapp user by their id from the database.
 *  @param  {WhatsAppUser} element with the new object.
 *  @param  {Function} callback.
 *  @param  {Options} options.
 *  @param  {Function} callback.
 *  @return {void}.
 */
module.exports.updateWhatsAppUser = function(element, options, databaseQuery, callback) {
    let updatedElement = {
        name        : element.name,
        email       : element.email,
        funcional   : element.funcional,
        phonenumber : element.phonenumber,
        dateOfAdding: Date.now,
    };
    Book.findOneAndUpdate(databaseQuery, updatedElement, options, callback);
};