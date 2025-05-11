'use client'

export default function ContactForm() {
  return (
    <div className="form-contact-us" style={{ 
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      padding: '30px',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      border: '2px solid #0075DC'
    }}>
      <form action="#">
        <div className="row">
          {/* Name */}
          <div className="col-md-12">
            <div className="form-group position-relative mb-4">
              <i className="fa fa-user position-absolute" style={{ 
                left: '15px', 
                top: '12px',
                color: '#0075DC'
              }}></i>
              <input 
                type="text" 
                className="form-control user" 
                placeholder="Your name"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid #0075DC',
                  color: '#fff',
                  paddingLeft: '40px',
                  height: '50px'
                }}
              />
            </div>
          </div>

          {/* Email */}
          <div className="col-md-12">
            <div className="form-group position-relative mb-4">
              <i className="fa fa-envelope position-absolute" style={{ 
                left: '15px', 
                top: '12px',
                color: '#0075DC'
              }}></i>
              <input 
                type="email" 
                className="form-control email" 
                placeholder="Your email"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid #0075DC',
                  color: '#fff',
                  paddingLeft: '40px',
                  height: '50px'
                }}
              />
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <div className="form-group position-relative mb-4">
              <i className="fa fa-phone position-absolute" style={{ 
                left: '15px', 
                top: '12px',
                color: '#0075DC'
              }}></i>
              <input 
                type="text" 
                className="form-control phone" 
                placeholder="Your phone"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid #0075DC',
                  color: '#fff',
                  paddingLeft: '40px',
                  height: '50px'
                }}
              />
            </div>
          </div>

          {/* Subject */}
          <div className="col-md-6">
            <div className="form-group position-relative mb-4">
              <i className="fa fa-tag position-absolute" style={{ 
                left: '15px', 
                top: '12px',
                color: '#0075DC'
              }}></i>
              <input 
                type="text" 
                className="form-control note" 
                placeholder="Subject"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid #0075DC',
                  color: '#fff',
                  paddingLeft: '40px',
                  height: '50px'
                }}
              />
            </div>
          </div>

          {/* Message */}
          <div className="col-md-12">
            <div className="form-group position-relative mb-4">
              <i className="fa fa-comment position-absolute" style={{ 
                left: '15px', 
                top: '12px',
                color: '#0075DC'
              }}></i>
              <textarea 
                className="form-control message" 
                placeholder="Your message" 
                rows={5}
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid #0075DC',
                  color: '#fff',
                  paddingLeft: '40px',
                  resize: 'none'
                }}
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-md-12">
            <div className="form-group mt-4">
              <button 
                type="submit" 
                className="btn" 
                style={{
                  background: 'linear-gradient(135deg, #0075DC, #004080)',
                  color: 'white',
                  padding: '12px 30px',
                  borderRadius: '4px',
                  border: '2px solid #0075DC',
                  boxShadow: '0 4px 15px rgba(0, 117, 220, 0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Updated Placeholder Styles with global tag and !important */}
      <style global jsx>{`
        /* More specific selectors with !important to override browser defaults */
        .form-contact-us input.form-control::placeholder {
          color: #fff !important;
          opacity: 0.7 !important;
        }
        
        .form-contact-us input.form-control::-webkit-input-placeholder {
          color: #fff !important;
          opacity: 0.7 !important;
        }
        
        .form-contact-us input.form-control:-ms-input-placeholder {
          color: #fff !important;
          opacity: 0.7 !important;
        }
        
        .form-contact-us input.form-control::-ms-input-placeholder {
          color: #fff !important;
          opacity: 0.7 !important;
        }
        
        .form-contact-us input.form-control:-moz-placeholder {
          color: #fff !important;
          opacity: 0.7 !important;
        }
        
        .form-contact-us input.form-control::-moz-placeholder {
          color: #fff !important;
          opacity: 0.7 !important;
        }
        
        /* Separate rules for textarea placeholders */
        .form-contact-us textarea.form-control::placeholder {
          color: #fff !important;
          opacity: 0.7 !important;
        }
        
        .form-contact-us textarea.form-control::-webkit-input-placeholder {
          color: #fff !important;
          opacity: 0.7 !important;
        }
        
        .form-contact-us textarea.form-control:-ms-input-placeholder {
          color: #fff !important;
          opacity: 0.7 !important;
        }
        
        .form-contact-us textarea.form-control::-ms-input-placeholder {
          color: #fff !important;
          opacity: 0.7 !important;
        }
        
        .form-contact-us textarea.form-control:-moz-placeholder {
          color: #fff !important;
          opacity: 0.7 !important;
        }
        
        .form-contact-us textarea.form-control::-moz-placeholder {
          color: #fff !important;
          opacity: 0.7 !important;
        }
      `}</style>
    </div>
  )
}