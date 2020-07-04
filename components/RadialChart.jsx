import Chart from 'chart.js'
import { useEffect } from 'react'

const RadialChart = () => {
  useEffect(() => {
    const myRadarChart = new Chart(document.querySelector('#radialChart'), {
      type: 'radar',
      data: {
        labels: ['HTML5', 'CSS3', 'ReactJS', 'JavaScript', 'Node.js', 'Next.js'],
        datasets: [{
            data: [80, 80, 70, 90, 50, 50],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Skills',
          fontColor: 'rgba(180, 55, 55, 0.8)'
        },
        tooltips: {
          enabled: false
        },
        legend: {
          display: false,
        },
        scale: {
					beginAtZero: true
				}
      }
    });
  }, [])
  return (
    <div>
      <canvas id='radialChart'  aria-label="My Developer skills" role="img">
        <p>No se pudo cargar el Canvas</p>
      </canvas>
    </div>
  )
}

export default RadialChart
