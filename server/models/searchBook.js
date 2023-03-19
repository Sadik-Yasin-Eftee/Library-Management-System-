//search book
exports.searchBook = "SELECT * FROM books WHERE author = ? OR genre = ? OR name LIKE ?";