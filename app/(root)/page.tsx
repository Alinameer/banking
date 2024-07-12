import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Ali', lastName: 'Nameer', email: 'alinamer2113@gmail.com' };
    
  return (
    <section className='home'>
        <div className='home-content'>
          <header className='home-header'>
              <HeaderBox 
                type="greeting"
                title="welcome"
                user={loggedIn?.firstName || 'Guest'}
                subtext="Access and mange your account and tranctions effciently."
              />

              <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
              />
          </header>

          recent transctions
        </div>

        <RightSidebar 
          user={loggedIn}
          transactions={[]}
          banks={[ { currentBalance: 123.50},{currentBalance: 500.50} ]}
        />
    </section>
  )
}

export default Home
