// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(num, DNAArray) {
  return {
    num,
    DNAArray,
    mutate() {
      const randBaseIndex = Math.floor(Math.random() * this.DNAArray.length)
      let newBase = returnRandBase()
      while (DNAArray[randBaseIndex] === newBase) {
        newBase = returnRandBase()
      }
      this.DNAArray[randBaseIndex] = newBase
      return this.DNAArray
    },
    compareDNA(newBacStrain) {
      const sameBases = this.dna.reduce((acc, curr, i, arr) => {
        if (arr[i] === newBacStrain.dna[i]) {
          return acc + 1
        } else {
          return acc
        }
      }, 0)
      const percentDNAShared = (sameBases / this.DNAArray.length) * 100
      const percentage2dp = percentDNAShared.toFixed(2)
      console.log(`Bacteria strain ${this.num} and bacteria strain ${newBacStrain.num} have ${percentage2dp}% of DNA bases in common.`)
    },
    willLikelySurvive() {
      const cGRatio = this.DNAArray.filter(element => element === 'C' || element === 'G')
      return cGRatio.length / this.DNAArray.length >= 0.6
    }
  }
}

const survivingSpecimen = []
let idCounter = 1

while (survivingSpecimen.length < 30) {
  const newOrg = pAequorFactory(idCounter, mockUpStrand())
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg)
  }
  idCounter++
}

console.log(survivingSpecimen)
