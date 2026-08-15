import { useState } from 'react';
import { sendContactMessage } from '../api/client.js';

export default function Footer({ contact }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', text: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ state: 'error', text: 'Please fill in every field before sending.' });
      return;
    }

    setStatus({ state: 'sending', text: 'Sending...' });
    try {
      const res = await sendContactMessage(form);
      setStatus({ state: 'success', text: res.message });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ state: 'error', text: err.message || 'Something went wrong. Try again.' });
    }
  }

  return (
    <footer id="contact">
      <div className="wrap">
        <h2>let's build something ✦</h2>
        <p className="sub">
          Open to full-time and internship roles in software and AI/ML.
          Email me directly, or use the form below — it's wired up to a real backend.
        </p>

        <div className="contact-links">
          <a href={`mailto:${contact.email}`}>✉ {contact.email}</a>
          <a href={`tel:${contact.phone}`}>☎ {contact.phone}</a>
          <a href={contact.linkedin}>in LinkedIn</a>
          <a href={contact.github}>⌥ GitHub</a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            placeholder="What would you like to say?"
            rows="4"
            value={form.message}
            onChange={handleChange}
          />
          <div className="form-bottom">
            <button type="submit" className="btn btn-primary" disabled={status.state === 'sending'}>
              {status.state === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            {status.text && (
              <span className={`form-status form-status-${status.state}`}>{status.text}</span>
            )}
          </div>
        </form>

        <div className="footer-bottom">
          <span>Anshika Yadav — IIIT Jabalpur</span>
          <span>designed with a little sparkle ✦</span>
        </div>
      </div>
    </footer>
  );
}
