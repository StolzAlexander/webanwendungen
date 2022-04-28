import { bcData } from './bc-data.js'

window.onload = setHandler

let MAX_CASES_PER_100K = 0

function setHandler () {
  getAllBL()
  getMaxCasesPer100()
  getCountyByBL('alle')

  const state = document.getElementById('state')

  state.addEventListener('change', e => {
    getCountyByBL(e.target.value)
  })
}

function getMaxCasesPer100 () {
  let Countys = getCounty('alle')
  Countys = sortAndSliceTopTen(Countys)
  MAX_CASES_PER_100K = Countys[0].cases
}

function getCounty (county) {
  let Countys = []
  const data = bcData.features
  for (const key of Object.keys(data)) {
    if (data[key].attributes.BL === county || county === 'alle') {
      Countys.push({ cases: Math.round(data[key].attributes.cases_per_100k * 10) / 10, county: data[key].attributes.county, bl: data[key].attributes.BL })
    }
    Countys = sortAndSliceTopTen(Countys)
  }
  return Countys
}

function getCountyByBL (county) {
  try {
    let svgElements = ''
    let yOffset = 5
    let Countys = getCounty(county)
    Countys = sortAndSliceTopTen(Countys)

    for (county of Countys) {
      console.log(MAX_CASES_PER_100K)
      const rectWidth = ((county.cases / MAX_CASES_PER_100K) * 100) - 10
      svgElements += ` <g transform="translate(0,${yOffset})">
      <text x="10" y="0" font-size="2"  fill="black">${county.county}</text>
      <text x="0" y="5" font-size="2"  fill="black">${county.cases}</text>
      <rect x="10" y="1" width="${rectWidth}%" stroke="black" stroke-width="0.1" height="4" fill="lightblue" />

      </g>`
      yOffset += 10
    }

    const svg = document.querySelector('svg')
    while (svg.hasChildNodes()) {
      svg.removeChild(svg.firstChild)
    }
    svg.innerHTML += svgElements
  } catch (error) {
    console.log(error)
  }
}

function sortAndSliceTopTen (Countys) {
  try {
    const sortedCountys = Countys.sort((a, b) => b.cases - a.cases).slice(0, 10)

    // sortedCountys.forEach((e) => {
    // console.log(`${e.county} ${e.cases} ${e.bl}`)
    // })
    return sortedCountys
  } catch (error) {
    console.log(error)
  }
}

function getAllBL () {
  try {
    const countys = new Set()
    const data = bcData.features
    const select = document.getElementById('state')

    for (const key of Object.keys(data)) {
      countys.add(data[key].attributes.BL)
    }

    const allCountys = Array.from(countys).sort()

    for (const countys of allCountys) {
      select.innerHTML += `<option value=\'${countys}\'>${countys}</option>`
    }
  } catch (error) {
    console.log(error)
  }
}
