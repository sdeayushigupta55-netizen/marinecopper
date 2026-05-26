import React from "react";

export default function Payment() {
  return (
    <section
      id="payment"
      className="relative overflow-hidden bg-gradient-to-br from-[#fffaf6] via-[#fff6ef] to-[#fffdf9] py-14 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
             <p className="inline-block rounded-full bg-[#fff2e6] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.35em] text-[#b87333] border border-[#f1d9c6]">
    Payment Information
  </p>

          <h2 className="mt-4 text-4xl font-black text-[#5b351d] sm:text-5xl">
            Simple & Secure Payments
          </h2>

          <p className="mt-5 text-lg text-[#6b4a34]">
            We offer multiple payment options to make your purchase easy and
            secure. Choose the method that works best for you and enjoy our
            premium drinking water with confidence.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#b87333]" />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Left Side */}
          <div className="rounded-[24px] border border-[#f1e3d4] bg-white/90 p-6 shadow-[0_20px_60px_rgba(91,53,29,0.08)] backdrop-blur sm:p-8">
            <div className="space-y-4 text-[#6b4a34]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b87333]">
                  Company Info
                </p>
                <div className="mt-3 space-y-2 text-base sm:text-lg">
                  <p>
                    <strong className="text-[#5b351d]">Company Name:</strong>{" "}
                    MARINE BEVERAGES
                  </p>
                  <p>
                    <strong className="text-[#5b351d]">GSTIN:</strong>{" "}
                    09BKQPV2341J1ZJ
                  </p>
                </div>
              </div>

       <div className="border-t border-[#f1e3d4] pt-4">
  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b87333]">
    Bank Details
  </p>
  <div className="mt-3 space-y-2 text-base sm:text-lg">
    <p>
      <strong className="text-[#5b351d]">Account Name:</strong>{" "}
      Marine Beverages
    </p>
    <p>
      <strong className="text-[#5b351d]">Account Number:</strong>{" "}
      43222900000745
    </p>
    <p>
      <strong className="text-[#5b351d]">IFSC Code:</strong>{" "}
      DCBL0000432
    </p>
    <p>
      <strong className="text-[#5b351d]">Bank Name:</strong> DCB Bank
    </p>
    <p>
      <strong className="text-[#5b351d]">Branch:</strong> Mathura
    </p>
  </div>
</div>

<div className="border-t border-[#f1e3d4] pt-4">
  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b87333]">
    UPI Payment
  </p>
  <div className="mt-3 text-base sm:text-lg">
    <p>
      <strong className="text-[#5b351d]">UPI ID:</strong>{" "}
      8923023000-3@ybl
    </p>
  </div>
</div>


            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center justify-center rounded-[24px] border border-[#f1e3d4] bg-white/90 p-6 text-center shadow-[0_20px_60px_rgba(91,53,29,0.08)] backdrop-blur sm:p-8">
            <div className="rounded-[20px] bg-white p-4 shadow-md">
              <img
                src="/qr.png"
                alt="Scan and Pay QR"
                className="h-auto w-52 object-contain sm:w-60"
              />
            </div>

            <h3 className="mt-5 text-2xl font-black text-[#5b351d]">
              Scan & Pay
            </h3>

            <p className="mt-2 text-sm text-[#8a6a52] sm:text-base">
              Use any UPI app to scan this QR code and complete your payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}