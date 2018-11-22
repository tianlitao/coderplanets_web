import React from 'react'

const SvgComponent = props => (
  <svg
    className="prefix__icon"
    viewBox="0 0 1024 1024"
    width={200}
    height={200}
    {...props}
  >
    <defs>
      <style />
    </defs>
    <path d="M956.02 114.957s52.748 4.11 52.748 50.63v693.62s-3.112 49.636-52.748 50.696V114.957zm0 0M15.232 859.274s2.119 50.69 50.69 50.69H956.02V855.62l-890.035-1.06-1.122-688.907H15.232v693.62zm0 0M956.02 114.957H65.923s-50.691-1.054-50.691 50.63H956.02v-50.63zm0 0" />
    <path d="M724.841 486.601c24.634 14.222 24.634 37.495 0 51.718L372.138 741.952c-24.634 14.222-44.789 2.586-44.789-25.859V308.827c0-28.444 20.155-40.08 44.789-25.858L724.84 486.6z" />
  </svg>
)

export default SvgComponent
