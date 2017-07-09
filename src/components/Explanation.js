import React from 'react'
import ButtonGroup from './ButtonGroup'

export default () =>
  <div>
    <p>
      Respond to each question on the Spiritual Gifts Assessment according to
      the following scale:
    </p>
    <ButtonGroup
      labels={[
        'Not at All / Never True',
        'Sometimes / True Once in a While',
        'Most of the Time / Usually True',
        'Consistently / Definitely True',
      ]}
    />
    <p>
      <b>
        Answer according to who you <i>are</i>, not who you would like to be, or
        think you ought to be.
      </b>
    </p>
    <p>
      Don’t labor over each question. Just read it and answer it. Click the
      first answer that pops into your mind.
    </p>
    <p>
      <i>Pray</i> before and during the process of taking the assessment. Let
      God speak to you about this. After all, they’re His gifts.
    </p>
  </div>
