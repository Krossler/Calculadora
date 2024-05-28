import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas)

export const Xmark = () => (

  <div>
    <i><FontAwesomeIcon icon="fa-solid fa-xmark" /></i>

  </div>
)