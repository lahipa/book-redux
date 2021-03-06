import React, { useEffect } from 'react';
import '../../App.css';
import {
  Card,
  Button
} from 'react-bootstrap';
import numeral from 'numeral';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { getBookById } from '../../store/actions';

const mapStateToProps = (state) => {
  return {
    book: state.bookReducer.book
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBookId: (id) => dispatch(getBookById(id))
  }
}

const BookDetailPage = (props) => {
  
  const { book, match } = props;

  useEffect(() => {
    props.getBookId(match.params.id);
  }, [])

  // const book = {
  //   id: 5,
  //   title: 'ini judul',
  //   isbn: 'null',
  //   authorName: 'ini author',
  //   synopsis: 'ini sinopsis',
  //   price: 84000.0,
  //   bookStatus: 'OUT_OF_STOCK',
  // }

  const bookStatus = book.bookStatus === 'FOR_SELL' ? 'info' : 'warning';

  return (
    <div className="App">
      <div className="container">
        <Card className="pl-o p-5">
          <div className="row">
            <div className="col-md-3">
              <LinkContainer to="/" style={{ cursor: 'pointer' }}>
                <h2>&larr;</h2>
              </LinkContainer>
            </div>
            <div className="col-md-6">
              <h2 style={{ color: "#8052ff" }}>
                {book.title}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <img
                className="img-fluid"
                variant="top"
                alt=""
                //src={book.imageUrl}
                src="https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg"
                width={450}
              />
            </div>
            <div className="col-md-4">
              <Button
                variant={bookStatus}
                className="btn-sm font-weight-bold m-2"
              >
                {book.bookStatus}
              </Button>
              <h4
                className="my-2 font-weight-bold"
                style={{ color: "#8052ff" }}
              >
                {`Rp ${numeral(book.price).format("0,0")}`}
              </h4>
              <h5 className="my-3 text-dark text-left">
                Author: {book.authorName}
              </h5>
              <h6 className="text-left">Book Synopsis :</h6>
              <p className="text-black-50 text-justify">{book.synopsis}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailPage);