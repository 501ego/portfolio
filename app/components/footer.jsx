import { Link } from '@nextui-org/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Footer() {
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText('diego.ormazabal.m@gmail.com')
      toast.success('Email copied to clipboard')
    } catch (err) {
      toast.error('Failed to copy email to clipboard')
    }
  }

  return (
    <footer className="flex justify-center border-t border-zinc-600">
      <section className="flex flex-col px-11 py-5 max-w-6xl items-center w-full flex-wrap gap-3">
        <article className="flex flex-row gap-8 justify-center flex-wrap">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-subtitleColor">
              Information
            </h3>
            <div className="flex flex-row gap-3">
              <Link
                className="hover:text-hover text-sm text-textPrimary"
                href="https://github.com/501ego"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Github profile"
              >
                <span>Github</span>
              </Link>
              <Link
                className="hover:text-hover text-sm text-textPrimary"
                href="https://www.linkedin.com/in/diego-ormazabal-maldonado"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="LinkedIn profile"
              >
                <span>LinkedIn</span>
              </Link>
              <Link
                className="hover:text-hover text-sm text-textPrimary"
                href="https://inacapmailcl-my.sharepoint.com/:b:/g/personal/diego_ormazabal02_inacapmail_cl/EQwWPBELtp9AgkkXcz5gPMcBWrvPGi0pmK6hzp4Tc-p9-Q?e=uimVhG"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="LinkedIn profile"
              >
                <span>Resume</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-subtitleColor">Contact me</h3>
            <div className="flex flex-row gap-3">
              <Link
                className="hover:text-hover text-sm text-textPrimary"
                href="mailto:diego.ormazabal.m@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="LinkedIn profile"
              >
                <span>Send email</span>
              </Link>
              <button
                className="hover:text-hover flex items-start text-sm text-textPrimary"
                onClick={handleCopyClick}
                aria-label="LinkedIn profile"
              >
                <span>Copy email</span>
              </button>
              <ToastContainer />
            </div>
          </div>
        </article>
        <p className="text-sm mt-7 flex flex-wrap gap-1">
          Created by
          <span className="text-titleColor"> Diego Ormazábal M.</span> © 2023
        </p>
      </section>
    </footer>
  )
}
