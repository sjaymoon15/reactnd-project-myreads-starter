import React, { Component } from 'react';

class Book extends Component {
  render() {
    const { book } = this.props;
    const style = {
      width: 128,
      height: 193,
    };

    if (book && book.imageLinks) {
      style.backgroundImage = `url("${book.imageLinks.thumbnail}")`;
    }
    return (
      <li>
        <div className='book'>
          <div className='book-top'>
            <div className='book-cover' style={style} />
            <div className='book-shelf-changer'>
              <select>
                <option value='move' disabled>
                  Move to...
                </option>
                <option value='currentlyReading'>Currently Reading</option>
                <option value='wantToRead'>Want to Read</option>
                <option value='read'>Read</option>
                <option value='none'>None</option>
              </select>
            </div>
          </div>
          <div className='book-title'>{book.title}</div>
          {book &&
            book.authors &&
            book.authors.map((author) => {
              return (
                <div className='book-authors' key={author}>
                  {author}
                </div>
              );
            })}
        </div>
      </li>
    );
  }
}

export default Book;
