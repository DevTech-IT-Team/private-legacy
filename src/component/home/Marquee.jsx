const items = [
  'Private Trust Education',
  'Generational Wealth',
  'Asset Protection',
  'Family Legacy Planning',
  'Estate Strategy',
  'Trust Formation',
  'Mentorship & Coaching',
  'Land & Farm Protection',
  'Private Trust Education',
  'Generational Wealth',
  'Asset Protection',
  'Family Legacy Planning',
  'Estate Strategy',
  'Trust Formation',
  'Mentorship & Coaching',
  'Land & Farm Protection',
]

function Marquee() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="marquee-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee
