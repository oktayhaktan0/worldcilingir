'use client';

import { useActionState } from 'react';
import { submitContactForm } from '@/actions/contact';

const initialState = {
    success: false,
    message: '',
};

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

    if (state.success) {
        return (
            <div className="clean-card" style={{ padding: '2rem', textAlign: 'center', background: '#ecfdf5', borderColor: '#34d399' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: '#065f46', marginBottom: '0.5rem' }}>Mesajınız Alındı!</h3>
                <p style={{ color: '#047857' }}>{state.message}</p>
            </div>
        );
    }

    return (
        <div className="clean-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--bg-tertiary)', paddingBottom: '1rem' }}>
                Bize Yazın
            </h3>

            <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Adınız Soyadınız</label>
                    <input
                        name="name"
                        required
                        type="text"
                        placeholder="Adınız"
                        style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--bg-tertiary)' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Telefon Numaranız</label>
                    <input
                        name="phone"
                        required
                        type="tel"
                        placeholder="05xxxxxxxxx"
                        style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--bg-tertiary)' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Mesajınız</label>
                    <textarea
                        name="message"
                        rows={4}
                        placeholder="Nasıl yardımcı olabiliriz?"
                        style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--bg-tertiary)' }}
                    />
                </div>

                {state.message && !state.success && (
                    <div style={{ color: '#ef4444', fontSize: '0.9rem' }}>{state.message}</div>
                )}

                <button
                    type="submit"
                    disabled={isPending}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                >
                    {isPending ? 'Gönderiliyor...' : 'Gönder ✉️'}
                </button>
            </form>
        </div>
    );
}
