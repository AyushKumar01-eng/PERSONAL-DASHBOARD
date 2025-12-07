//THEME CHANGER

const mode = document.querySelector('#checkbox')

mode.addEventListener('change', () => {
    if (mode.checked) {
        document.body.classList.add('darkmode')
    }
    else {
        document.body.classList.remove('darkmode')
    }
})


//NOTES PAD

const noteContainer = document.querySelector('.note')
const placeholder =document.getElementById('noteadders')

function attachAddListener(input, button) {
     input.addEventListener('keydown',(event)=>{
            if(event.key==='Enter'){
                  const val = input.value.trim()
        if (val !== '') {
            localStorage.setItem('note', val)
            input.value = ''
            render()
        }
       
                
            }
        })
    button.addEventListener('click', () => {
        const val = input.value.trim()
        if (val !== '') {
            localStorage.setItem('note', val)
            input.value = ''
            render()
        }
       
    });
}

function render() {
    const stored = localStorage.getItem('note');
    if (stored) {
        noteContainer.innerHTML = `
      <h1>TODAY'S NOTE:</h1>
      <h3>${stored}</h3>
      <button class="dlt notebtn">Delete Note</button>
    `
        const delBtn = noteContainer.querySelector('.dlt')
        delBtn.addEventListener('click', () => {
            localStorage.removeItem('note')
            render()
        })
    } else {
        noteContainer.innerHTML = `
      <input id="noteadders" type="text" placeholder="WRITE A NOTE">
      <button class="notebtn">ADD NOTE</button>
    `
        const input = document.getElementById('noteadders')
        const addBtn = noteContainer.querySelector('.notebtn')
        attachAddListener(input, addBtn)
    }
}

render()


//QUOTES WITH REFRESH BUTTON

function randomnumgen() {
    let r = Math.floor(Math.random() * 183)
    return r
}

function quotesmanager() {

    const quotedv = document.querySelector('.disquote')
    const quotes = [
        "Although the world is full of suffering, it is also full of overcoming of it.",
        "Anxiety is a thin stream of fear trickling through the mind.",
        0,
        "Anything that’s human is mentionable, and anything that is mentionable can be more manageable.",
        "As you reflect back on the previous weeks, months or year, look for moments you can celebrate too.",
        "Blogging about mental health can have a huge impact.",
        "But no matter how much evil I see, there is much more light than darkness.",
        "Change what you can, manage what you can’t.",
        "Courage is not having the strength to go on. It is going on when you don’t have the strength.",
        "Deep breathing is our nervous system’s love language.",
        "Developing and maintaining a healthy gut will support a healthy mind.",
        "Don’t let your mind bully your body into believing it must carry the burden of its worries.",
        "Hope is being able to see that there is light despite all the darkness.",
        "Early intervention is crucial.",
        "Every day begins with an act of courage and hope: getting out of bed.",
        "Exercise keeps me occupied, which is good for my mental health.",
        "Feeding your brain with good nourishment is as important as feeding your body healthy food.",
        "Talk to yourself like someone you love.",
        "You can’t hate yourself into someone you love.",
        "You deserve the same compassion you offer to others.",
        "Be careful how you talk to yourself. You’re always listening.",
        "The most powerful relationship you’ll ever have is the one with yourself.",
        "Self-compassion is simply giving the same kindness to ourselves that we would give to others.",
        "Even on your worst days, you are worthy of love.",
        "You are not behind. You’re exactly where you need to be.",
        "Rest is not weakness. It’s nourishment.",
        "Stop shrinking to fit spaces that no longer hold you.",
        "Being kind to yourself is not optional. It’s essential.",
        "You don’t have to prove your pain to deserve healing.",
        "You’re allowed to be both a masterpiece and a work in progress.",
        "You’re already enough. You always were.",
        "Healing begins the moment you show up for yourself.",
        "Let go of who you think you’re supposed to be; embrace who you are.",
        "Your self-worth isn’t measured by your productivity.",
        "Perfection is the enemy of progress.",
        "May you never forget how far you’ve come.",
        "You don't have to earn rest.",
        "There’s nothing wrong with you. Something happened to you.",
        "You are allowed to be soft and strong at the same time.",
        "Healing isn’t about becoming someone new. It’s about becoming who you are.",
        "You’re not a burden. You’re a human being with needs.",
        "What if your softness is your strength?",
        "Sometimes the bravest thing you can do is rest.",
        "Speak to yourself as you would to someone you deeply love.",
        "You can be kind to yourself and still hold yourself accountable.",
        "Your pace is perfect for your process.",
        "It’s okay to take up space.",
        "Almost everything will work again if you unplug it for a few minutes, including you.",
        0,
        "You are not lazy. You are exhausted. There’s a difference.",
        "Sometimes doing your best is just getting through the day.",
        "Burnout happens when you ignore the whispers and wait for the screams.",
        "It’s okay to rest. You’re not a machine.",
        "Saying no is a form of self-care.",
        "Chronic stress is not a badge of honor.",
        "Overworking is not the same as being valuable.",
        "Rest is resistance.",
        "You can be tired and still be enough.",
        "Burnout is what happens when you try to avoid being human.",
        "You weren’t meant to do everything alone.",
        "You are not broken. Your brain just works differently.",
        0,
        "ADHD isn’t a deficit of attention. It’s a different way of paying attention.",
        "You don’t need to be fixed. You need to be understood.",
        "You’re not lazy, unmotivated, or stuck. You’re just living in a system that wasn’t built for your brain.",
        "Masking is not healing—it’s survival.",
        "The pressure to appear ‘normal’ is often the reason neurodivergent people burn out.",
        "Executive dysfunction isn’t about willpower. It’s about wiring.",
        "You are not too much. The world may be too rigid.",
        "You weren’t made to fit in—you were made to stand out.",
        "The way you process the world is valid—even if others don’t understand it.",
        "ADHD isn’t an excuse. It’s an explanation.",
        "Consistency is harder for neurodivergent brains—and that doesn’t make you less capable.",
        "Living with ADHD means your mind is always moving—it’s okay to rest.",
        "Forget the box. You were never meant to fit in it anyway.",
        0,
        "Productivity doesn’t define your value.",
        "Your brain might be different—but your needs, dreams, and emotions are just as real.",
        "Being neurodivergent is not a flaw—it’s a variation.",
        "Let go of the shame. You were never meant to be anyone else.",
        "You can honor your neurodivergence and still grow.",
        "You don’t need to do it like everyone else. You just need to find what works for you.",
        "Self-compassion is an essential skill for every neurodivergent adult.",
        "Stop comparing your behind-the-scenes to someone else’s highlight reel.",
        "Even if it takes longer, your path is still valid.",
        "Some of your traits that were once labeled as ‘too much’ are now your superpowers.",
        "You are allowed to work with your brain—not against it.",
        "Focus isn’t always about discipline—it’s about the right environment.",
        "You’re not failing. You’re adapting.",
        "Celebrate every small win—especially when the world doesn’t see them.",
        0,
        "You are more than a diagnosis. You are a whole person with a story worth telling.",
        "You are the awareness behind them.",
        "Sometimes the bravest thing you can do is sit with the discomfort and not run.",
        "You are safe right now. Remind your body.",
        "Let go of needing to control everything. Focus on what’s within reach.",
        "Breathe. You’re doing the best you can with what you have.",
        0,
        "You’ve survived every single anxious moment up to now.",
        "Overthinking steals your joy. Come back to now.",
        "Your anxiety might be a messenger, not a monster.",
        "The storm in your mind doesn’t always mean there’s danger around you.",
        "You’re allowed to feel calm, even if everything isn’t perfect.",
        "Right now, in this moment, you are safe.",
        "No is a complete sentence.",
        "You don’t have to set yourself on fire to keep others warm.",
        "Boundaries are the distance at which I can love you and me simultaneously.",
        "Saying no to others often means saying yes to yourself.",
        "The people who get upset when you set boundaries are the ones who benefited from you having none.",
        0,
        "You’re not responsible for how others react to your boundaries.",
        "It’s okay to outgrow people who aren’t growing with you.",
        "Boundaries aren’t walls. They’re bridges to healthier connection.",
        "You teach people how to treat you by showing them what you allow.",
        "You don’t have to feel guilty for doing what’s best for you.",
        "Healthy boundaries are an act of self-respect.",
        "You are braver than you believe.",
        "It’s okay if all you did today was breathe.",
        "Progress, not perfection.",
        "Healing is a journey, not a destination.",
        "You’re allowed to disappoint others and still be a good person.",
        "Choosing peace over pleasing others is a brave act.",
        "You’re allowed to take up space and protect it.",
        "You’ve survived 100% of your hardest days.",
        0,
        "Even the darkest night will end and the sun will rise.",
        "Hope is being able to see that there is light despite the darkness.",
        "You don’t have to have it all figured out to move forward.",
        "You’re allowed to start again. And again.",
        "Sometimes resilience is simply choosing to try again tomorrow.",
        "It won’t always feel this heavy.",
        "Tiny steps still move you forward.",
        0,
        "Rock bottom can be a solid foundation to rebuild from.",
        "Healing doesn’t mean you’ll never struggle. It means you know how to care for yourself when you do.",
        "There is no rush. Your journey is unfolding in its own time.",
        "You are allowed to change. In fact, you’re meant to.",
        "You are growing in ways you can’t even see yet.",
        "Your strength isn’t in how loud you roar — it’s in how gently you keep going.",
        "You are already becoming someone you used to need.",
        0,
        "You are the proof that healing is possible.",
        "You are not starting from scratch. You’re starting from experience.",
        "You don’t have to go fast. You just have to keep going.",
        0,
        "You are worthy of the life you’re trying to build.",
        "It’s not about getting back to who you were — it’s about becoming who you need to be.",
        "You are allowed to be proud of how far you’ve come.",
        "Even if the path is unclear, you’re still allowed to take the next step.",
        "Recovery is a daily choice — not a destination.",
        "Hope isn’t naive. It’s powerful.",
        "You can be healing and still have hard days.",
        "Even here, even now, you are worthy of peace.",
        "Keep going. The version of you you’re becoming is worth it.",
        0,
        "Healing is not linear.",
        "Your journey is a series of tiny, brave steps.",
        "Growth feels messy but it's worth it.",
        "Strength is your willingness to keep trying.",
        "Let yourself be soft where the world asked you to be hard.",
        "Not everything that weighs you down is yours to carry.",
        "If it costs your peace, it’s too expensive.",
        "Stillness is not empty. It’s full of answers.",
        "Take the pressure off. You’re allowed to just be.",
        "Sometimes the most productive thing you can do is rest.",
        "No is a complete sentence.",
        "You are more than your mistakes.",
        0,
        "You are more than your thoughts and fears.",
        "You are capable of creating positive change in your life.",
        "It’s okay to prioritize your happiness.",
        "It’s okay to take small steps towards your goals.",
        "You are deserving of peace and happiness.",
        "You are allowed to put your well-being first.",
        "You are more than the struggles you face.",
        "It’s okay to ask for help and support.",
        "You are worthy of a life filled with joy and peace.",
        "You are more than your thoughts and feelings.",
        "It’s okay to practice self-love and self-care.",
        0,
    ]

    const openmodalbtn = document.querySelector('[data-modal-target]')
    const overlay = document.getElementById('overlay')

    function displayQuote() {
        let randomnum = randomnumgen()
        if (quotes[randomnum] === 0) {
            quotedv.innerHTML = ''
            const modal = document.querySelector(openmodalbtn.dataset.modalTarget)
            const line = `AUR KITNA MOTIVATION LEGA BHOSDI`
            openmodal(modal, overlay, line)
        } else {
            quotedv.innerHTML = `"${quotes[randomnum]}"`
        }
    }

    displayQuote()

    document.querySelector('.disbtn').addEventListener('click', displayQuote)

}

quotesmanager()

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.disquote').innerHTML = 'REALITY SUCKS, Chase Your DREAMS'
})

document.querySelector('.closebtn').addEventListener('click', () => {
    const modal = document.getElementById('modal')
    closemodal(modal, overlay)
})
overlay.addEventListener('click', () => {
    const modals = document.querySelector('.active')
    closemodal(modals, overlay)
})



function openmodal(modal, overlay, dialogue) {
    if (modal == null) return
    else {
        modal.classList.add("active")
        overlay.classList.add("active")
        document.getElementById('modalbody').innerHTML = dialogue
    }
}
function closemodal(modal, overlay) {
    if (modal == null) return
    else {
        modal.classList.remove("active")
        overlay.classList.remove("active")
        quotesmanager()
    }
}

//TIME DISPLAY

function updateDateTime() {
    const now = new Date()
    const dateStr = now.toLocaleDateString()
    const timeStr = now.toLocaleTimeString()

    document.getElementById("date").innerHTML = `<h3> ${dateStr} </h3>`
    document.getElementById('timedis').innerHTML = `<h5> ${timeStr} </h5>`
}

updateDateTime()
setInterval(updateDateTime, 1000)

document.getElementById('time').addEventListener('click', () => {
    const text = `samay mtt dekh kamm krr`
    if (randomnumgen() % 2 === 0)
        openmodal(modal, overlay, text)
})

//WEATHER API

async function weathercontrol() {

    async function weatherdata(lat, lon) {
        const api = await fetch(`http://api.weatherapi.com/v1/current.json?key=a94b429a14a94bf2874213638250112&q=${lat},${lon}`)

        return await api.json()
    }

    document.addEventListener('DOMContentLoaded', async () => {

        navigator.geolocation.getCurrentPosition(async (position) => {

            const result = await weatherdata(position.coords.latitude, position.coords.longitude)

            const weather = result.current.condition.text
            const temp = result.current.temp_c
            const icon = result.current.condition.icon

            document.querySelector('.weather').innerHTML = `
        <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='${icon}' alt="Weather data by WeatherAPI.com" border="0"></a>
        <h3>It’s currently ${weather} in your area, with a temperature of ${temp} (WHO CARES), focus on your todos.</h3>
        `

        }, () => {
            alert('AN ISSUE OCCURED WHILE TRYING TO DISPLAY WEATHER');
            document.querySelector('.weather').innerHTML = '.....CHECK YOUR INTERNET CONNECTION...'
        })

    })

}

weathercontrol()

//TODOLIST
