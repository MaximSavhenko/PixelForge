import React from 'react'
import styles from './intro.module.scss'
import { Button } from '@/shared/UI'

interface Props {
  className?: string
}

export const Intro: React.FC<Props> = ({ className }) => {
  return (
    <section className={styles.intro}>
      <div className="container">
        <div className={styles.intro__wrapp}>
          <h1>
            <strong>Hi, my name is <em>Yuri</em></strong> <br /> a frontend developer
          </h1>
          <p>with passion for learning and creating.</p>

          <Button name={'Download CV'} />
        </div>
      </div>
    </section>
  )
}
