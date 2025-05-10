export default function ContactForm() {
  return (
    <div className="form-contact-us">
      <form action="#">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <input type="text" className="form-control user" placeholder="Your name" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <input type="text" className="form-control email" placeholder="Your email" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control phone" placeholder="Your phone" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control note" placeholder="Subject" />
            </div>
          </div>
          <div className="col-md-12 mt-5 pt-3">
            <div className="form-group">
              <input type="text" className="form-control message" placeholder="Your message" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group mt-5">
              <button type="submit" className="btn btn-primary-home-square">
                <svg className="me-2" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_4249_28840)">
                    <path d="M8.75 17.6113V22.2493C8.75 22.5733 8.958 22.8603 9.266 22.9623C9.343 22.9873 9.422 22.9993 9.5 22.9993C9.734 22.9993 9.96 22.8893 10.104 22.6933L12.817 19.0013L8.75 17.6113Z" fill="white" />
                    <path d="M23.685 0.139089C23.455 -0.0239114 23.153 -0.0459114 22.903 0.0850886L0.403045 11.8351C0.137044 11.9741 -0.0199555 12.2581 0.00204448 12.5571C0.0250445 12.8571 0.224045 13.1131 0.507045 13.2101L6.76205 15.3481L20.083 3.95809L9.77505 16.3771L20.258 19.9601C20.336 19.9861 20.418 20.0001 20.5 20.0001C20.636 20.0001 20.771 19.9631 20.89 19.8911C21.08 19.7751 21.209 19.5801 21.242 19.3611L23.992 0.861089C24.033 0.581089 23.915 0.303089 23.685 0.139089Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4249_28840">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}