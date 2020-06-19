$(document).ready(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)


    let d1 = new Date()
    let d2 = new Date("2001/03/28")
    let diff = (d2.getTime() - d1.getTime()) / 1000
    diff /= (60 * 60 * 24)
    let $idade = Math.abs(Math.round(diff / 365.25))

    $('.about-desc').html($('.about-desc').html().replace('${idade}', $idade))
    $('.footer-copyright').html($('.footer-copyright').html().replace('${ano}', d1.getFullYear()))

    $('.loading').remove()

    AOS.init({
        duration: 700
    })

    let makeItRain = function () {
        let increment = 0
        let drops = ''
        let backDrops = ''

        while (increment < 95) {
            let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1))
            let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2))
            increment += randoFiver
            drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>'
            backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>'
        }

        $('.rain').append(drops)
        $('.rain.back-row').append(backDrops)
    }

    $('.arrow-down').click(() => {
        let target = $('.arrow-down').data('target')
        $('html, body').animate({
            scrollTop: $(target).position().top
        }, 1000)
    })

    $('.nav-link').click(function (e) {
        let $target = $(this).attr('href')
        $('html, body').animate({
            scrollTop: $($target).position().top
        }, 1000)
        e.preventDefault()
    })

    $(this).scroll(function () {
        const $nav = $('#navb')
        const $home = $('#home')
        const $homeH = $home.outerHeight(true) - $nav.height()
        if ($(this).scrollTop() >= $homeH) {
            $nav.addClass('bg-dark')
        } else {
            $nav.removeClass('bg-dark')
        }
    })

    makeItRain()
})

