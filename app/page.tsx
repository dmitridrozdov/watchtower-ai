"use client"

import React, { useRef } from 'react'
import Webcam from 'react-webcam';

type Props = {}

const HopePage = (props: Props) => {
  const webcamRef = useRef<Webcam>(null);
  return (
    <div>HopePage</div>
  )
}

export default HopePage