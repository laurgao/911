const pg1content = `<p>

On September 11th, 2001, 4 planes flying from the East Coast to California were hijacked. Two crashed into the Twin Towers, one crashed into the Pentagon, and one was diverted by the passengers and crashed into Pennsylvania. This unprecedented terrorist attack would go on to cause huge levels of fear amongst the American populace and provoke the War on Terror.

In the aftrmath of the attacks, Bush declared a global "war on terror" instead of declaring war explicitly on any country. Within 2-3 weeks of 9/11, the US would send troops to Afghanistan.

The goal was to get into Afghanistan to kill Osama Bin Laden (the leader of Al Qaeda, the terrorist group responsible for 9/11) and stop Al Qaeda. The U.S. was able to quickly overrun the Taliban government but they struggled to catch Bin Laden, who fled to somewhere in the mountains near Pakistan. Bush would never realize his dream of catching Bin Laden; Obama would later be the one to kill him. The new leader of Alqeada went into hiding&mdash;this cycle of a goose chase where the U.S. was losing.

Today, Afghanistan is one of the deadliest places to live, with all the civilians who die as a byproduct of the U.S. fighting the Taliban. It's worse in 2020, when the troops withdrew, than in 2008. Even though we withdrew land troops, we still have military aircraft in the region.

In the aftermath of 9/11, policies were enacted to drastically increases government power over regular citizens who are suspected of connection with terrorism. Bush gave the government power to surveil American citizens' international phone calls without a warrant. The CIA captured hundreds of people internationally for being suspected of terrorism, and they were refused lots of rights, including habeas corpus (which is normally constitution-protected) and the right to remain silent. They were tortured. The Geneva conventions after WWII bans torture, and the U.S. government usually condemned this kind of violent treatment, but during the War on Terror, it became standard practice for the U.S. Government. The White House declared that the Geneva conventions did not apply to the Taliban, which would prove to be controversial. A lot of this lack of individual freedoms and these exceptions to these important laws were controversial.

The language that Bush uses is extremely provocative. "Who attacked our country?" "safe haven to terrorism" &mdash; evoking fear in American citizens, painting the war on terror as this project that is in the interest of Americans' safety solely and that he is such a caring president for caring so much.

Iraq was the next target of the war on terror. To stop terror, Bush reasoned, the US must be proactive. This meant stopping Saddam Hussain, a dangerous man allegedly manufacturing weapons of mass destruction, before he even has a chance to attack the U.S. Bush initiated an invasion of Iraq in the name of self-defense.	We are still currently living with the aftermath of Bush's 9/11 response: we still have detainees overseas in Cuba, we have threatened the peace of the Middle East, and we were still fighting the Talibans in Afghanistan 20 years later.

In recent years, the American public has stopped caring about the war on terror, tired about our military poking its head into other countries and stirring up trouble. Some people who voted for Trump believed he was incompetent, but knew that he was less supportive of global military interventions than Clinton. Many Trump voters were veterans and even left-leaning. They just really wanted out of the Middle East.

9/11 would also become the source of many so-called "conspiracy theories." A significant percentage of the American population found it dubious that the Twin Towers would fall only from planes crashing into them. These people would argue that the manner in which they fell was suspicious and more resembling a planned demolition than a natural fall from a plane crash. Some hypothesize that the government planted a false flag in order to invade Afghanistan and Iraq.
</p>
    `


function waitForEl(selector) {
    const input = document.getElementById(selector);
    if (input) {
        input.innerHTML = pg1content.replaceAll(`
`, `</p><p>`);
    } else {
        setTimeout(function () {
            waitForEl(selector);
        }, 100);
    }
};

waitForEl("pg-1");

