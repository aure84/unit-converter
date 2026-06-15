import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import styles from './CookieBanner.module.css'

function updateConsent(state) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('consent', 'update', {
      ad_storage:         state,
      analytics_storage:  state,
      ad_user_data:       state,
      ad_personalization: state,
    })
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // localStorage read must run in an effect — this component is prerendered
    // in Node where localStorage does not exist.
    if (!localStorage.getItem('cookieConsent')) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookieConsent', 'granted')
    updateConsent('granted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem('cookieConsent', 'denied')
    updateConsent('denied')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent">
      <p className={styles.text}>
        We use cookies and similar technologies for analytics (Google Analytics) and
        personalised advertising (Google AdSense). By clicking Accept you consent to
        non-essential cookies being stored on your device. You can decline and still
        use the site — only strictly necessary storage will be used.{' '}
        <Link to="/cookies" className={styles.link}>Cookie Policy</Link>
      </p>
      <div className={styles.actions}>
        <button className={styles.reject} onClick={reject}>Reject non-essential</button>
        <button className={styles.accept} onClick={accept}>Accept all</button>
      </div>
    </div>
  )
}
