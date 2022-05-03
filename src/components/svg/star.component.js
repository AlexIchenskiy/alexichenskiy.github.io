function Star() {
    return (
        <svg width="40px" height="40px" viewBox="0 0 40 40">
          <rect width="600" height="600" fill="#efefef" />
          <path d={Star(0, 0, 12, 20, 40 )} fill="rgba(255,200,0, 1)" />
        </svg>
    )
}

export default Star;