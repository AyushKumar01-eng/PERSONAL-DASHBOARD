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

function attachAddListener(input, button) {
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
    let r = Math.floor(Math.random() * 200)
    return r
}


function quotesmanager() {

    const quotes = [
        "Courage is an inner light that thrives when you admit your fear.",
        "Growth begins when you stop performing and start listening to yourself.",
        "Pain is a teacher — attend the lesson, then choose a new path.",
        "Your quieter choices shape the loudest parts of your life.",
        "Resilience is patience practiced every time you decide to stand again.",
        "The hardest truths are bridges to a clearer, kinder self.",
        "You are not your mistake; you are the hand that learns from it.",
        "Purpose grows when you do small things for ordinary reasons.",
        "The mind is a room — tidy the corners to change the whole view.",
        "When you accept who you are, you borrow strength from reality.",
        "Fear is a signal, not a sentence — act with curiosity.",
        "Bravery is the art of continuing with soft hands and steady feet.",
        "Suffering deepens your compass; let it point you toward meaning.",
        "Every quiet decision compounds into a life you either admire or avoid.",
        "To change your future, treat today like an experiment, not a verdict.",
        "Honesty with yourself is the beginning of real freedom.",
        "Vulnerability is the doorway; authenticity is the life on the other side.",
        "Let your curiosity outgrow your certainty.",
        "Gratitude rewires the mind to find footholds in difficult terrain.",
        "You can carry grief and still make room for joy.",
        "Growth asks you to trade comfort for possibility, one small step at a time.",
        "The voice that criticizes can also be trained to encourage.",
        "Meaning is crafted, not found — make it with your hands and hours.",
        "Change requires both forgiveness and a plan.",
        "Listen to the parts of you that have been whispering for attention.",
        "Authority over yourself is the most liberating form of power.",
        "Hope is a practice: show up and take the next sensible action.",
        "Healing happens when you name what you feel and refuse to hide it.",
        "The present is a thin place where courage and choice meet.",
        "You are allowed to outgrow what once sustained you.",
        "Inner quiet gives you room to hear your true wants.",
        "Simplicity often reveals the solutions complexity hid from you.",
        "Progress is better measured by direction than by speed.",
        "Fear loses its shape when you move toward it with purpose.",
        "You become fluent in whatever you practice in private.",
        "Boundaries are love expressed to yourself so you can love others better.",
        "The secret to endurance is an honest pace and clear priorities.",
        "If your life feels heavy, ask which promises you made that no longer fit.",
        "Curiosity can soften judgment and open new doors.",
        "You are the steward of your attention — guard it wisely.",
        "Failure is a draft, not the final edition of your story.",
        "Success built on values survives storms; success built on image collapses.",
        "Small, daily advances heal what dramatic gestures cannot.",
        "The ache you feel is often the place where courage grows.",
        "Authenticity costs something, but it returns everything that pretending steals.",
        "Confidence comes from showing up enough times to trust yourself.",
        "The hardest conversations steer you toward clearer, kinder relationships.",
        "Ask better questions; your answers will improve quietly but surely.",
        "A steady heart can outlast a brilliant idea.",
        "You cannot pour from an empty cup — refill without guilt.",
        "Grief and gratitude can coexist — both honor what mattered.",
        "Clarity arrives when you stop living according to other people's drafts.",
        "Your limits are invitations to refine strategy, not reasons to stop.",
        "Listen to silence — it often holds the map you need.",
        "Choosing yourself sometimes means saying no to a thousand good things.",
        "Heat tempers steel; pressure clarifies purpose.",
        "Time reveals what you protect and what you ignore.",
        "Patience directed is more useful than passion unfocused.",
        "The stories you tell yourself are the scaffolding for your life.",
        "Change is more tolerable when paired with ritual and small wins.",
        "Confidence is built by finishing things you promised yourself.",
        "The mind can betray you; train it gently and consistently.",
        "Your future self will thank you for the tiny acts you do now.",
        "Freedom begins where self-deception ends.",
        "Regret is a signal — listen, learn, then design a better next move.",
        "Discomfort is the raw material of transformation.",
        "When you stop proving and start contributing, your work breathes.",
        "Compassion toward yourself increases the bandwidth to help others.",
        "The quieter you become, the more clearly you can hear your path.",
        "Change comes in increments — celebrate the small revolutions.",
        "Agency grows when you accept responsibility for things within your reach.",
        "To heal, first be willing to look at the wound without flinching.",
        "The inner critic is loud — turn the volume down with gratitude.",
        "Meaningful work is rarely tidy; it’s persistent and honest.",
        "Surrender isn't giving up; it's choosing where to stop fighting what is.",
        "Your attention is a scarce resource — invest it like capital.",
        "Ask less of outcomes and more of the effort you control.",
        "Strength without softness becomes brittle; balance is the deeper power.",
        "Doubt can be an ally if it makes you prepare more wisely.",
        "The habits you keep are the character you build.",
        "Forgiveness frees the forgiver before it touches the forgiven.",
        "Anxiety often points to a story that needs rewriting.",
        "Clarity begins when you name the feelings beneath your actions.",
        "The smallest compassionate act can reroute a spiral of despair.",
        "Adversity tests the design of your life; it doesn't have to define it.",
        "Courage is practicing honesty even when the outcome is uncertain.",
        "Your limits are maps, not walls — explore their edges.",
        "Purpose is discovered by doing, not by waiting to feel ready.",
        "You change the world quietly by showing up consistently for one person.",
        "The future is negotiated daily through the commitments you keep.",
        "Let curiosity be the antidote to rigid certainty.",
        "Inner work is messy but yields the truest freedom.",
        "You are more than your habits; you can redesign them one choice at a time.",
        "When you embrace discomfort you expand the range of your life.",
        "Hope without action is a wish; action without hope is empty labor.",
        "Self-respect is practiced in how you recover from your mistakes.",
        "What you tolerate in yourself, you will accept in your life.",
        "Wisdom grows when you let experience teach you instead of blame it.",
        "Discipline is just love turned into routine.",
        "The hardest climbs give you the clearest views.",
        "When you can't change outside circumstances, change the way you respond.",
        "Let your curiosity outrun your fear of being wrong.",
        "Meaning is made by committing to a direction and refining as you go.",
        "The loudest successes are often covers for quiet insecurities.",
        "Vulnerability rebuilds connection in places that armor broke.",
        "You are allowed to rest; rest is part of the work.",
        "Your inner voice deserves kindness and clarity, not ridicule.",
        "A life of depth is chosen by saying no to many small things.",
        "The courage to begin is more important than the skill to finish.",
        "Wisdom is knowing when to push and when to pause.",
        "Grief honors love; give it space without letting it settle all day.",
        "Identity changes slowly when you act differently than your old story.",
        "Patience is an active practice, not passive waiting.",
        "Honesty with others begins with honest conversations inside your own mind.",
        "The most creative thing you can do is rearrange what you already have.",
        "If you want to change habits, change the cues around you.",
        "Success that costs your values is never success at all.",
        "The things that scare you most are often pointing to your edges.",
        "When discomfort arrives, ask what the discomfort wants to teach you.",
        "A calm mind sees options; a frantic mind sees barriers.",
        "Trust grows in small, repeatable demonstrations of care.",
        "Being busy is not the same as being productive or fulfilled.",
        "Your story matters because you are the only author who can write it.",
        "Humility doesn't shrink you; it makes room for learning.",
        "Let your future self be guided by the small promises you keep today.",
        "If you want different results, rearrange your daily routines.",
        "Emotional honesty is a compass — follow it even when it's uncomfortable.",
        "Let failures be data, not identity.",
        "Boundaries are a practical kindness to yourself and others.",
        "You are allowed to start again with the wisdom of what failed before.",
        "The path forward often asks for consistency rather than intensity.",
        "A brave life is made from many ordinary choices repeated.",
        "When you simplify your inner life, decisions become easier and clearer.",
        "Presence is an act of courage in a distracted world.",
        "Your greatest project is the person you become over time.",
        "Self-care is not indulgence; it’s preparation for contribution.",
        "The mind reorganizes with new habits; be patient with the architecture.",
        "Hard truths are medicine — they hurt but they heal.",
        "Let go of outcomes you can't control; steward what you can.",
        "Curiosity about your suffering reduces its power over you.",
        "Consistency compounds; the small daily choices build a life.",
        "Ask yourself what kind of person you want to become, then act.",
        "Courage is ordinary people deciding to be present in hard things.",
        "Your nervous system remembers; be gentle when introducing change.",
        "Meaning requires work — sometimes persistence is the most spiritual act.",
        "Align your actions with the person you admire, not the person you fear.",
        "Stillness helps you hear the next correct step.",
        "To reclaim peace, remove one unnecessary obligation from your day.",
        "Confidence is an after-effect of tiny completed tasks.",
        "The stories we tell are rewriteable with evidence and new experiences.",
        "Identity is sculpted by repeated action, not one-time decisions.",
        "Allow doubt to be a tool for preparation, not a stop sign.",
        "Becoming stronger often looks like becoming kinder to yourself.",
        "Change feels risky until it becomes habit.",
        "Your emotional life deserves a strategy as much as your career does.",
        "The brave act is not feeling no fear, but choosing a direction anyway.",
        "Freedom grows when you take responsibility for the parts you can change.",
        "Focus is the quiet commitment to finish what you started.",
        "Every loss eventually teaches a language of gratitude and wisdom.",
        "When you clean out the noise, your purpose becomes louder.",
        "Forgiveness is a discipline that returns energy to your life.",
        "Work that matters usually asks you to show up on ordinary days.",
        "You are more resourceful than you give yourself credit for.",
        "Set aims that make you stretch without breaking.",
        "Your inner critic can be a litmus test for what you truly value.",
        "The future is constructed by the habits you keep today.",
        "A life of depth often starts with saying no to distraction.",
        "Let disappointment be a teacher, not a permanent roommate.",
        "Confidence grows when you trust small decisions more than big promises.",
        "Meaning is a muscle — strengthen it with practice, not wishes.",
        "Long-term change is the result of patient, consistent renegotiation of daily life.",
        "Presence of mind costs little but pays enormous dividends.",
        "You can't control everything, but you can cultivate your response.",
        "Start where you are; growth will follow the courage to begin.",
        "The things that break you can also reveal what to build next.",
        "Clarity arrives when you pair honest questions with consistent action.",
        "The deepest work you do is often unseen by others.",
        "Discipline is choosing what you want most over what you want now.",
        "When you feel lost, you're actually being redirected.",
        "You won’t always be motivated. Learn to be consistent.",
        "Rock bottom often becomes the foundation for the strongest version of you.",
        "You grow when you do the thing you least want to do.",
        "If nothing changes, nothing changes — take the first step.",
        "Your future self is quietly begging you to start today.",
        "You don’t need more time, you need more honesty with yourself.",
        "Being uncomfortable is the tax you pay for leveling up.",
        "Life changes the moment you stop expecting and start doing.",
        "Courage is not loud; sometimes it's a whisper saying ‘try again.’",
        "Your habits are votes for the person you want to become.",
        "The version of you that you fear becoming is usually the one you need to face.",
        "Courage is choosing what to carry and what to leave behind.",
        "The measure of progress is whether your life has more meaning today.",
        "Your body remembers care; give it consistent kind attention.",
        "The bravest step is to name what you feel and keep going.",
        "Persistence isn't glamorous — it's mostly showing up on hard days.",
        "Let curiosity lead when certainty is not available.",
        "Small wins are steady deposits toward meaningful change.",
        "What you practice in private you will perform in public.",
        "A generous heart is forged by honest, disciplined self-work."
    ]
    let randomnum = randomnumgen()
    // document.querySelector('.disquote').innerHTML =quotes[randomnum]
    console.log(quotes[randomnum]);

}

quotesmanager()

//TIME API


//WEATHER API



//TODOLIST