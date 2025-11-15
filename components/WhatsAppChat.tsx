import React from "react";

/**
 * Floating WhatsApp chat button.
 * ENV variables:
 * - VITE_WHATSAPP_NUMBER: international phone number, digits only or with leading + (e.g. 15551234567 or +15551234567)
 * - VITE_WHATSAPP_MESSAGE: optional default message
 *
 * After adding env vars, restart Vite/Vercel build so they are recognized.
 */

const WhatsAppChat: React.FC = () => {
  const env: any = (import.meta as any).env || {};
  const rawNumber: string | undefined = env.VITE_WHATSAPP_NUMBER;
  const defaultMessage: string =
    env.VITE_WHATSAPP_MESSAGE || "Hi, I'd like to talk about your services.";

  if (!rawNumber) {
    // No number configured — do not render anything
    return null;
  }

  /**
   * Sanitize phone:
   * - keep digits
   * - keep optional leading +
   */
  const phone = rawNumber.replace(/[^\d+]/g, "");

  /**
   * wa.me format cannot include "+"
   * So we must remove it if present.
   */
  const normalizedPhone = phone.replace(/^\+/, "");

  const url =
    `https://wa.me/${normalizedPhone}` +
    (defaultMessage ? `?text=${encodeURIComponent(defaultMessage)}` : "");

  const wrapperStyle: React.CSSProperties = {
    position: "fixed",
    right: 20,
    bottom: 20,
    zIndex: 99999,
    pointerEvents: "auto",
  };

  const buttonStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "#25D366",
    boxShadow: "0 6px 18px rgba(37,211,102,0.3)",
    color: "white",
    textDecoration: "none",
  };

  const svgStyle: React.CSSProperties = {
    width: 28,
    height: 28,
  };

  return (
    <div style={wrapperStyle} data-testid="whatsapp-wrapper">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        style={buttonStyle}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          style={svgStyle}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M20.52 3.48A11.85 11.85 0 0 0 12.06.5C6.62.5 1.99 4.98 1.4 10.2c-.39 4.06 1.2 7.96 4.27 10.37L3 23l2.6-1.07a12.11 12.11 0 0 0 6.44 1.82h.01c5.44 0 10.07-4.48 10.66-9.7.59-5.22-2.58-9.9-7.2-10.57z"
            fill="#075E54"
            opacity="0.0"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.1-.472-.148-.672.149-.197.297-.768.966-.942 1.164-.174.197-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.477-.884-.788-1.48-1.761-1.652-2.059-.174-.297-.019-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198 0-.371-.049-.52-.049-.149-.672-1.612-.92-2.21-.242-.581-.487-.5-.672-.51l-.57-.01c-.197 0-.52.074-.794.372s-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074.149.197 2.095 3.2 5.076 4.487 3.12 1.375 3.12.917 3.68.86.562-.058 1.758-.718 2.006-1.412.248-.697.248-1.294.173-1.413-.074-.12-.272-.197-.57-.347z"
            fill="#fff"
          />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppChat;
