import React from 'react'

const Error = () => {
  return (
    <>
      {/* <!-- Content ============================================= --> */}
      <div id="content">
        {/* <!-- Error ============================================= --> */}
        <section className="section">
          <div className="container text-center">
            <h2 className="text-25 mb-0">Error - 404</h2>
            <h3 className="text-6 mb-3">oops! The page you requested was not found!</h3>
            <p className="text-3 text-muted">The page you are looking for was moved, removed, renamed or might never existed.</p>
            <a href="#" className="btn btn-primary shadow-none px-5 m-2">Home</a> <a href="#" className="btn btn-outline-dark shadow-none px-5 m-2">Back</a>
          </div>
        </section>
        {/* <!-- Error end -->  */}
      </div>
      {/* <!-- Content end -->  */}
    </>
  )
}

export default Error
