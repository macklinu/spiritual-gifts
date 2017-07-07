import React from 'react'
import ListItem from '../ListItem'
import Text from '../Text'

export default () =>
  <div>
    <Text>
      Respond to each question on the Spiritual Gifts Assessment according to
      the following scale:
    </Text>
    <ol>
      <ListItem>Not at All / Never True</ListItem>
      <ListItem>Sometimes / True Once in a While</ListItem>
      <ListItem>Most of the Time / Usually True</ListItem>
      <ListItem>Consistently / Definitely True</ListItem>
    </ol>
    <Text>
      <b>
        Answer according to who you <i>are</i>, not who you would like to be, or
        think you ought to be.
      </b>
    </Text>
    <Text>
      Don’t labor over each question. Just read it and answer it. Click the
      first answer that pops into your mind.
    </Text>
    <Text>
      <i>Pray</i> before and during the process of taking the assessment. Let
      God speak to you about this. After all, they’re His gifts.
    </Text>
  </div>
