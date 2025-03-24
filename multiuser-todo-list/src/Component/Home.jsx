import React from 'react';

function Home(){
    
    return (
        <div className="container my-4">
        <h2 className="text-center mb-4">Todo List</h2>

        <div className="row">

          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card shadow-sm">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Blog Image" />
              <div className="card-body">
                <h5 className="card-title">Blog Title 1</h5>
                <p className="card-text">This is a short description of the blog post.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card shadow-sm">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Blog Image" />
              <div className="card-body">
                <h5 className="card-title">Blog Title 2</h5>
                <p className="card-text">Another interesting blog post with a short summary.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card shadow-sm">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Blog Image" />
              <div className="card-body">
                <h5 className="card-title">Blog Title 3</h5>
                <p className="card-text">A brief description of the blog content.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
}

export default Home;