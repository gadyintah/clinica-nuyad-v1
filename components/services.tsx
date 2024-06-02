import Link from "next/link"

export default function Services() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-screen- mx-auto px-4 sm:px-6">
        
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Services Offered</h2>
            <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-5 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <Link href="/services/service1" className="block" aria-label="Oral Prophylaxis and Teeth Whitening">
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
                <div className="absolute inset-0 bg-black opacity-75 rounded" style={{ backgroundImage: "url('/images/1teeth-whitening.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative z-10 flex flex-col items-center">
                  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                      <g strokeWidth="2">
                        <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                        <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                        <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                        <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1 bg-gray-100/50">Oral Prophylaxis and Teeth Whitening</h4>
                </div>
              </div>
            </Link>

            {/* 2st item */}
            <Link href="/services/service2" className="block" aria-label="Dental Check-Up and Ortho Consultation">
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
                <div className="absolute inset-0 bg-black opacity-75 rounded" style={{ backgroundImage: "url('/images/2ortho-consultation.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative z-10 flex flex-col items-center">
                  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                      <g strokeWidth="2">
                        <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                        <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                        <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                        <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1 bg-gray-100/50">Dental Check-Up and Ortho Consultation</h4>
                </div>
              </div>
            </Link>


            {/* 3st item */}
            <Link href="/services/service3" className="block" aria-label="Tooth Extraction and Odontectomy">
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
                <div className="absolute inset-0 bg-black opacity-75 rounded" style={{ backgroundImage: "url('/images/3tooth-extraction.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative z-10 flex flex-col items-center">
                  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                      <g strokeWidth="2">
                        <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                        <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                        <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                        <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1 bg-gray-100/50">Tooth Extraction and Odontectomy</h4>
                </div>
              </div>
            </Link>

            {/* 4th item */}
            <Link href="/services/service4" className="block" aria-label="Frenectomy and Operculectomy">
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
                <div className="absolute inset-0 bg-black opacity-75 rounded" style={{ backgroundImage: "url('/images/4tooth-operculectomy.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative z-10 flex flex-col items-center">
                  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                      <g strokeWidth="2">
                        <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                        <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                        <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                        <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1 bg-gray-100/50">Frenectomy and Operculectomy</h4>
                </div>
              </div>
            </Link>

            {/* 5th item */}
            <Link href="/services/service5" className="block" aria-label="Tooth Fillings and Cosmetic Dentistry">
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
                <div className="absolute inset-0 bg-black opacity-75 rounded" style={{ backgroundImage: "url('/images/5teeth-fillings.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative z-10 flex flex-col items-center">
                  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                      <g strokeWidth="2">
                        <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                        <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                        <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                        <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1 bg-gray-100/50">Tooth Fillings and Cosmetic Dentistry</h4>
                </div>
              </div>
            </Link>

            {/* 6th item */}
            <Link href="/services/service6" className="block" aria-label="Dentures and Prosthodontic Rehabilitation">
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
                <div className="absolute inset-0 bg-black opacity-75 rounded" style={{ backgroundImage: "url('/images/6dentures.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative z-10 flex flex-col items-center">
                  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                      <g strokeWidth="2">
                        <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                        <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                        <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                        <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1 bg-gray-100/50">Dentures and Prosthodontic Rehabilitation</h4>
                </div>
              </div>
            </Link>

            {/* 7th item */}
            <Link href="/services/service7" className="block" aria-label="Root Canal Treatment">
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
                <div className="absolute inset-0 bg-black opacity-75 rounded" style={{ backgroundImage: "url('/images/7root-canal-treatment.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative z-10 flex flex-col items-center">
                  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                      <g strokeWidth="2">
                        <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                        <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                        <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                        <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1 bg-gray-100/50">Root Canal Treatment</h4>
                </div>
              </div>
            </Link>

            {/* 8th item */}
            <Link href="/services/service8" className="block" aria-label="TADS and Orthodontic Treatment">
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
                <div className="absolute inset-0 bg-black opacity-75 rounded" style={{ backgroundImage: "url('/images/8orthodentic-treatment.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative z-10 flex flex-col items-center">
                  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                      <g strokeWidth="2">
                        <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                        <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                        <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                        <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1 bg-gray-100/50">TADS and Orthodontic Treatment</h4>
                </div>
              </div>
            </Link>

            {/* 9th item */}
            <Link href="/services/service9" className="block" aria-label="Bone Graft and Implantology">
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
                <div className="absolute inset-0 bg-black opacity-75 rounded" style={{ backgroundImage: "url('/images/9bone-gaft.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative z-10 flex flex-col items-center">
                  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                      <g strokeWidth="2">
                        <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                        <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                        <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                        <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1 bg-gray-100/50">Bone Graft and Implantology</h4>
                </div>
              </div>
            </Link>

            {/* 10th item */}
            <Link href="/services/service10" className="block" aria-label="Dental Xray">
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
                <div className="absolute inset-0 bg-black opacity-75 rounded" style={{ backgroundImage: "url('/images/10dental-xray.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative z-10 flex flex-col items-center">
                  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                      <g strokeWidth="2">
                        <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                        <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                        <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                        <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1 bg-gray-100/50">Dental Xray</h4>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}