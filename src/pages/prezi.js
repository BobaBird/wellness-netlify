import React from 'react'

const Prezi = () => {
  return (
    <div style={{ width: `100%`, margin: `120px auto` }}>
      <iframe
        title="prezi-presentation"
        height="400"
        width="550"
        src="https://prezi.com/view/KJfgYJBMSGinlpMYZvCb/"
        frameborder="0"
        webkitallowfullscreen="1"
        mozallowfullscreen="1"
        allowfullscreen="1"
        style={{ margin: `0 auto` }}
      ></iframe>
    </div>
  )
}

export default Prezi
