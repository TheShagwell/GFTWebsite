import { FcGlobe } from "react-icons/fc";
import { useTranslation } from 'react-i18next';
const Multilingual = () => {
    const { t } = useTranslation();
  return (

 	<div>
          {/* <div className="d-flex justify-content-end"> */}
          <div div className="dropdown" >
              <a className="btn btn-link dropdown-toggle" style={{ border: 'none', outline: 'none' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FcGlobe size={24} />
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                  <li><span className="dropdown-item-text">{t('language')}</span></li>
                  {languages.map(({ code, name, country_code }) => (
                      <li className='text-primary' key={country_code}>
                          <button type="button" className="dropdown-item" onClick={() => i18next.changeLanguage(code)} disabled={code === currentLanguageCode}>
                              <span className={`flag-icon flag-icon-${country_code} mx-2`} style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}></span>
                              {name}
                          </button>
                      </li>
                  ))}
              </ul>
          </div >
          {/* </div> */}
      </div>
			
  )
}

export default Multilingual