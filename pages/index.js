import { useState } from 'react'
import Link from 'next/link'
import PrankHead from '@components/PrankHead'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  let [title, setTitle] = useState('')

  return (
    <div className="container">
      <PrankHead title="Chicag0 Tribune News" />

      <main>
        <Header title="Let's prank people!" />
        <div className="description">
          Type in the prank article you'd like to share with folks: <br />
          <input
            type="text"
            placeholder="Cassidy saves entire school"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          {title.length > 0 && (
            <div>
              Send this URL to your friends! <br />
              <Link href={`/news/${title.toLowerCase().split(' ').join('-')}`}>
                <a>chicag0tribune.netlify.app/news/{title.toLowerCase().split(' ').join('-')}</a>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        input {
          margin: 10px 0;
          width: 100%;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
