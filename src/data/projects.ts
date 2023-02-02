interface ProjectDataType {
    id: string;
    title: string;
    desc: string;
    imgURL?: string;
    keywords: string[];
    date: number;
    content: [isTitle: Boolean, text: string][];
}

const projectData: ProjectDataType[] = [
    {
      id: 'id',
      title: 'Test',
      desc: "Description",
      imgURL: "",
      keywords: [],
      date: 197001,
      content: [
        [false, "Body"],
        [false, "Body"],
        [true, "Title"],
      ]
    },
    {
        id: 'EngWebApp',
        title: 'Large Scale B2B WebApp',
        desc: "FrontEnd WebApp Development",
        imgURL: "",
        keywords: ["JavaScript", "TypeScript", "HTML", "CSS", "GraphQL", "Angular", "SASS", "MaterialUI", "Git", "AWS", "ProblemSolving", "CriticalThinking", "ConflictResolution", "ActiveCommunication", "TimeManagement", "TeamManagement"],
        date: 202107,
        content: [
          [false, "Worked to help create and maintain a Angular WebApp used for a large scale B2B business. Work was proprietary."],
        ]
    },
    {
        id: 'AgileToolLayer',
        title: '3rd Party Tool Intergration',
        desc: "API & Frontend Development",
        imgURL: "",
        keywords: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "GraphQL", "Angular", "Flask", "SASS", "MaterialUI", "Git", "AWS", "AtlassianSuite", "Jenkins", "SwaggerUI", "ProblemSolving", "CriticalThinking", "ConflictResolution", "ActiveCommunication", "TimeManagement", "TeamManagement"],
        date: 202109,
        content: [
          [false, "Worked to help create and maintain a Flask based API solution in order to intergrate the Atlassian Suite and additional products into one secure, seamless web-app for use by a large agile focused team. Work was proprietary."],
        ]
      },
    {
        id: 'CstmWebsite',
        title: 'Custom Websites & Apps',
        desc: "Design & Development of Websites and Apps",
        imgURL: require("../images/website.png"),
        keywords: ["JavaScript", "TypeScript", "MongoDB", "SQL", "HTML", "CSS", "NodeJS", "React", "ReactNative", "Electron", "ExpressJS", "Gatsby", "SASS", "MaterialUI", "WordPress", "Shopify", "Figma", "ProblemSolving", "CriticalThinking", "ConflictResolution", "ActiveCommunication", "TimeManagement", "SelfMotivated", "Leadership"],
        date: 201901,
        content: [
          [false, "Body"],
          [false, "Body"],
          [true, "Title"],
        ]
    },
    {
        id: 'SmallBizDatabase',
        title: 'Small Business Inventory System',
        desc: "Database Design & GUI Implementation",
        imgURL: require("../images/small-biz.png"),
        keywords: ["SQL", "Python", "QT", "MatPlotLib", "ProblemSolving", "CriticalThinking", "ConflictResolution", "ActiveCommunication", "TimeManagement", "SelfMotivated", "Leadership"],
        date: 202003,
        content: [
          [false, "Body"],
          [false, "Body"],
          [true, "Title"],
        ]
    },
    {
      id: 'SudokuSolver',
      title: 'Sudoku Solver',
      desc: "GUI Game & Algorithm Implementation",
      imgURL: require("../images/sudoku.png"),
      keywords: ["Python", "QT", "ProblemSolving", "CriticalThinking"],
      date: 202002,
      content: [
        [false, "The Sudoku Solver game uses an algorithm to develop new random Sudoku puzzles. Once the puzzle is generated it allows the user to use mouse and keyboard to enter digits to attempt to fill out the puzzle. Once the player wants to check the answers the player can click the 'Check Answers' button. The program will then check all filled out answers and if it is correct it will lock in the answers and change the text color to green. If a player gives up the player can click the 'Auto-Solve Puzzle' button, the program will then use a backtracking algorithm to solve the Sudoku puzzle in real time allowing the player to watch how the algorithm works. As the puzzle is being auto-solved the puzzle will be locked and the auto-solved squares will have red text. A player can get a new puzzle at any point by simply clicking the 'New Puzzle' button."]
      ]
    },
    {
      id: 'BlackjackStratStudy',
      title: 'Blackjack Strategy CaseStudy',
      desc: "Data Analytics & Processing",
      imgURL: require("../images/blackjack-logo.png"),
      keywords: ["Python", "Pandas", "Numpy", "SciPy", "MatPlotLib", "Jupyter", "ProblemSolving", "CriticalThinking"],
      date: 202001,
      content: [
        [false, "This case study began as my final project for my Data / Statistical Analysis class in college. The goal of the study was to compare the three most popular strategies used by gamblers when playing blackjack, to find what was the statistically best strategy to utilize. This case study eventually evolved into a larger project that included a full desktop version of Blackjack that includes a fully functioning UI and an option to recieve hints based on the top strategy."],
        [false, "I preformed this anaylsis by first coding a very basic representation of Blackjack into Python. I would then us Jupyter Notebooks in order to test each strategy."],
        [true, "Creating Basic Blackjack Representation"],
        [false, "The game of blackjack that you find in many casinos is often suprisingly complex and can differ widely. Because of these differences I have stripped away a lot of the complexitiy of the game which may change depending on the region of play. Most of this complexitiy deals with the winnings and payouts however so the simplification will not affect our anaylsis of winning percentages. However, past the simplification of betting there are a few key aspects of the game that vary and have an effect on the outcome and probability of a game. As such I chose the most popular methods and describe the rules as following:"],
        [false, "These games are based on 1-on-1 tables where there is only one player per dealer"],
        [false, "The object of the game is to have a higher hand then the dealer, without going over 21"],
        [false, "All face cards are worth 10, as such the program prints them as additional 10 cards"],
        [false, "Aces are worth either 11 or 1, which ever gives you the highest score without going over 21"],
        [false, "Like face cards Aces are printed by their number value, either 11 or 1"],
        [false, "You the player start with 2 cards from the deck"],
        [false, "The dealer starts the game with 1 visible card"],
        [false, "If you go over 21, called busting, you lose no matter the dealers hand"],
        [false, "The dealer will draw a new card, called hitting, until their hand is equal to 17 or higher"],
        [false, "If the dealer busts you win no matter your hand, unless you have already bust"],
        [false, "During your turn you have 2 possible moves: Hit - draw another card from the deck, Stay - end your turn. Once you stay only the dealer can draw more cards"],
        [false, "You draw all the cards you want, one at a time, prior to the dealer drawing their cards"],
        [false, "If you and the dealer have equal hands the game is a tie, called a Push"],
        [true, "Strategies"],
        [false, "There are numerous different strategies players of blackjack deploy in order to better their odds in winning. The goal of this project is to take several of the most popular strategies and run simulations on them using our simplified version of blackjack to determine what your probability of winning at a blackjack table really is and which stratgies give you the best chances of winning."],
        [false, "For each strategy we test we will modify the blackjack_game function used above to implement the strategy, We will then use the built-in numpy functions to run simulations on the strategy, saving the results and analysising the successfulness of each strategy."],
        [true, "Strategy 1 - Dealer's 17"],
        [false, "The first strategy we will look at is the same strategy the dealers use. If your hand is below 17 you hit but if your hand is equal to or greater then 17 you stay. This strategy is based on the fact that hitting on a number higher then 16 gives you a fairly large probability to bust, and as such you are better to stay and hope that the opponent, in this case the dealer, either busts or stops prior to reaching your score. This is considered one of the most basic and simple strategies but still has its merits and supporters often cite the fact that the dealers using the strategy represents its effectiveness."],
        [false, "In order to implement this strategy we take our basic function and replace our current player input based system with an identical system that the dealer uses."],
        [true, "Strategy 2 - No Bust"],
        [false, "The second strategy we will look at is more conservative. In theory behind the strategy revolves around one of the basic dealer advantages of blackjack, which is that the dealer goes last giving you a chance to bust before the dealer. If you and the dealer both bust in the same game of blackjack, since you had busted first you still lose the round. This strategy simply takes a conservative approach, staying when there is any chance at bust. This often leads you to stay at very low totals in the hopes the dealer will bust."],
        [false, "In order to implement this strategy we take our dealer_17 function from strategy 1 and adjust the limit from 17 to 11. As any total over 11 has some risk of busting in it."],
        [true, "Strategy 3 - Chart Strategy"],
        [false, "The third strategy we will look at is called 'basic strategy' or 'chart strategy' though it is far from basic, it is by far the most complex strategy that can be implemented in 1-on-1 games of blackjack without using card counting. It has a specific action to take based on what your total cards compared to what the dealer is showing. It is represented by the following chart: (Only part of the chart is included as the rest deals with aspects of the game removed for these simulations)"],
        [false, "This chart is praised at the best strategy however it is complex and require you to memorize the chart, does this extra complexity and time spent memorization pay off compared to the first two strategies, does this tilt the odds of winning in your favor?"],
        [false, "In order to implement this strategy we use our basic outline however we have to build a relatively complex branching system for the player's decisions that uses a action variable similar to the one used in the user input game."],
        [true, "Simulation & Results"],
        [false, "Now we will run 100,000 games of blackjack with each strategy, summing up the win loss ratio of each. Below is the code for our simulator function that runs the given algorithm 100,000 times before outputing win percentages, average hand and a graph based on win / loss and hands."],
        [false, "The graph for Dealer's 17 is seperated in to two main groups of data, this will be true for our other two strategies as well. The bottom right grouping is a 100% loss rate because this grouping represents the case when a player busts. The reason for this distinct groupings is because the dealer will use the dealer17 strategy, meaning the only time a score will be below 17 on the Y axis is when a player busts. In the second grouping there is a section of data at the vary top above the 20 on the Y axis that represents a dealers's bust. We then have a line of data ranging from 17 to 20 on both axis that represents the tie line. With the smallest tie coming when both hands are equal to 17 and the largest tie coming when both hands are equal to 20. There is small areas area above and to the left of the tie line that represents a player win but not a dealers bust. Similarily below and to the right of the tie line represents a player loss but not a players bust."],
        [false, "In the chart we can see the range where the player didn't bust to be 4 datapoint wide, which is to be expected as it represents a dealers handscore of 17, 18, 19 & 20 as the player will always hit on something lower then a 17 and anything higher is a garenteed win or a bust. On average to tie players will have a hand of about 18-19 which makes since with this strategy because for no one to bust and for both players not to hit both of the hands must be in the 17-21 range. In addtion with this strategy you have a win percentage of about 42% which is not ideal as you win less then half the time, however your loss rate (due to the 8% tie rate) is also slightly under 50% at 49%, meaning you are losing about half your hands. Another interesting statistic that comes out of the data is on loss the players average hand is over 21, meaning that the majority of the losses come from the player busting rather then the player's score being beaten. This is seen with the density graph showing a warmer color in the top left of the bottom grouping of data showing that it is common to bust. The majority of the outcomes are still in thee scoring range in which niether player busts. The most common outcome was actually a 20-20 tie."],
        [false, "Much of what was covered for the first graph hold true to the second graph, however there are some key difference. With the more conservative strategy the bottom right grouping of data have shrunk in it's spread, in theory it should only be one dataset wide representing when the dealer gets a 21, however it is shown as 2 datapoint wide. The top left grouping has a much larger spread as the player will no longer hit on a score of 12, 13, 14, 15, or 16. Although this strategy eliminates busting, as is seen by the almost 7 points lower average hand score on loss, it does not improve your odds of winning. In fact this strategy proves very inefficent. With a win precentage of about 40% and a loss percentage of over 54% this would not be a wise strategy to employ. A interesting fact remains that dispite the different strategy the average score for tying remains almost unchanged, if you think about it from a probabilities stand point however this makes sense as the range for tying remains unchanged from 17-20 even though the range of player hand scores have changed. However, what has changed fairly dramatically is the chance for a tie, which makes sense because of the larger acceptable range of player score, however as we will see in our next strategy (which has a similar sized spread) this is not the full explination behind such a low chance to tie. This is due to the fact that there was no increase in the range of dealer hand scores. As shown in the density graph this method eliminates busting by the player and while maintaining the most likely outcome to still be a scoring finish. The most common outome was still a 20-20 tie joined by a 20-13 Dealer win."],
        [false, "inally within the chart strategy we see a relatively even distrabution of point between groupings 1 and 2, both of which have a large range. Similar to the first Dealer 17 strategy we have a win percentage over 42% and a loss percentage of about 50%. However based on the loss average player hand it appears that you are far less likely to loss from busting then you were in the Dealer 17 strategy. In addition, furthering our insight from strategy 2, the average tie hand remains almost unchanged. Just as before the most likely player bust scinario is when the dealer has a score of 10, from this we can gather that the most common starting card for the dealer is 10, which if you examine the score weights in a deck of cards makes sense. In addition just like before the most common outcome is a 20-20 tie. Examining the density chart you will see the chart strategy and the Dealer 17 strategy have very similar density distrubtions, but with the chart strategy having a larger range of player scores. Looking closely to the actual chart strategy you can see that for the most part the chart follows a similar hit if below 17 guide as the Dealer 17 strategy."],
        [false, "In conclusion we see that even using one of the 3 most popular strategies the odds are still not in your favor when you sit down at the blackjack table, although they are not entirely stacked against you. I would imagine if you run similar tests on the other forms of gambling you would find that although the odds are not in your favor they are better then most other forms of gambling. As for the strategies themselves we see that by a fairly significant margin the No Bust strategy is the worst with its win rate of about 40%. In researching strategies I found that many players and experts had already discovered as much, with most players contributing this strategies popularity with a psychological effect, being that for most players they rather loss by score then busting as a player busting has more of a feel of a player mistake then losing by score, which a player often feels like is due to luck not mistakes. The final two strategies are incredibly close in their win percentage with only a difference of 0.55% in favor of the chart strategy. However, as stated earlier the chart strategy is far more complex and difficult to master then the Dealer 17 strategy. This simplisity is a most likely a major factor in the reason dealers use the strategy. I would argue for a marginal increase in win probability it may not be worth the practice and learning of the strategy. In addition as seen in the density graphs the more complex algorithm gives a wider spread of possible scores for the player but the density distrbution do not change muchThe chart strategy however does limit the amount of losses by busts compared to the Dealer 17 strategy. In the case of the Dealer 17 strategy if you finish your turn without busting your probability of winning that round is relatively very high, however you have decent likelyhood to bust during your turn. Due to this difference in busting and the ever so slight edge in win percentage the chart strategy has emerged as the most popular and generally considered the 'best' strategy for blackjack."]
      ]
    },
    {
      id: 'NFLDataStudy',
      title: 'NFL Fantasy MVP CaseStudy',
      desc: "Data Analytics & Processing",
      imgURL: require("../images/nfl-league-logo.png"),
      keywords: ["Python", "Pandas", "Numpy", "Jupyter", "ProblemSolving", "CriticalThinking"],
      date: 201908,
      content: [
        [false, "The goal of this case study is to read in the Fantasy Football information we have gathered in order to determine the best player at certain positions every year (1999 - 2019) in the NFL."],
        [false, "Our strategy is to use Fantasy Points as a basis for individual performance. However, a major part will be instead of just judging players soley on how many points they gain in a season we will also be looking at how good their opponent's defense was against their position."],
        [true, "Data Collection & Cleaning"],
        [false, "Firstly we will read in the fantasy data, cleaning it and adding the different opponents to the data from a schedule file. We will then remove the outliers from the data before finding average performance by position through the years. We will find the average using EMA. We will then find the average yearly performance of each team's defense against the 5 positions we are tracking for each individual year. To normalize our data we will be taking the difference between the opponent team's average fantasy points given up and the positons EMA for that year. That difference will give us our Adjusted Points Value. A players Adjusted Point value will be totaled for the entire season, the player with the highest total Adjusted Points for the year at their position will be determined the top preformer."],
        [false, "The NFL Schedule for the 1999 - 2019 Seasons was originally scraped from pro-football-reference.com. The Schedule uses the teams full name and needs to be converted into the abbrivation that is used in the Fantasy Data Set."],
        [false, "The fantasy data was taken from fantasyfootballdatapros.com. Here we are doing some small cleaning of the data and loading into a dataframe."],
        [true, "Calculating Z-Scores and EMA"],
        [false, "Calculate the Z-score by each years position group. A Z-Score is a tangable evaluation of how far from the mean a data point is. A performance with a Z-Score higher then 3.0 or less then -3.0 is determined to be an outlier and removed from the calculations."],
        [false, "The EMA, or Exponential Moving Average, is commonly used as a technical indicator in Finance however it more generally is a way of calculating averages over time so that the more recent data has a larger weight in the factoring of the average. The EMA is used in this case to acknowledge that football is a changing game and as such more recent data is more accurate to the future and present of the game then past data, but at the same time that past data can still provide inside in a limited capacity."],
        [true, "Normalizing Data"],
        [false, "Calculate the averages of each team's defense against each position grouping every year. Using these averages compared to the EMA value of the leagues points at that position will give us our desired offset for normalization."],
        [true, "Calculating Yearly Position Leaders"],
        [false, "Add up all the performances for each player across the entire season to get the total AdjPts earned for each season per player. Then sort each yearly position list by total AdjPts to find the leader."],
        [true, "Results"],
        [false, "Based on our calculations here are the top players at their positions for each year examined:"],
        [false, "1999 - QB: Kurt Warner, WR: Randy Moss, TE: Wesley Walls, FB: Jonathan Linton, HB: Edgerrin James"],
        [false, "2000 - QB: Daunte Culpepper, WR: Cris Carter, TE: Chad Lewis, FB: Tony Richardson, HB: Edgerrin James"],
        [false, "2001 - QB: Kurt Warner, WR: David Boston, TE: Tony Gonzalez, FB: Larry Centers, HB: Ahman Green"],
        [false, "2002 - QB: Rich Gannon, WR: Hines Ward, TE: Bubba Franks, FB: Larry Centers, HB: Ricky Williams"],
        [false, "2003 - QB: Daunte Culpepper, WR: Randy Moss, TE: Tony Gonzalez, FB: Richie Anderson, HB: Priest Holmes"],
        [false, "2004 - QB: Daunte Culpepper, WR: Torry Holt, TE: Alge Crumpler, FB: Patrick Pass, HB: Tiki Barber"],
        [false, "2005 - QB: Tom Brady, WR: Larry Fitzgerald, TE: Antonio Gates, FB: Kyle Johnson, HB: Clinton Portis"],
        [false, "2006 - QB: Peyton Manning, WR: Terrell Owens, TE: Antonio Gates, FB: Mike Alstott, HB: Frank Gore"],
        [false, "2007 - QB: Tom Brady, WR: Randy Moss, TE: Chris Cooley, FB: Leonard Weaver, HB: Adrian Peterson"],
        [false, "2008 - QB: Drew Brees, WR: Steve Smith, TE: Tony Gonzalez, FB: Le'Ron McClain, HB: Matt Forte"],
        [false, "2009 - QB: Aaron Rodgers, WR: Steve Smith, TE: Brent Celek, FB: Le'Ron McClain, HB: Adrian Peterson"],
        [false, "2010 - QB: Tom Brady, WR: Mike Williams, TE: Mercedes Lewis, FB: Marcel Reece, HB: Chris Johnson"],
        [false, "2011 - QB: Tom Brady, WR: Calvin Johnson, TE: Jimmy Graham, FB: John Kuhn, HB: LeSean McCoy"],
        [false, "2012 - QB: Drew Brees, WR: Demaryius Thomas, TE: Heath Miller, FB: James Casey, HB: Arian Foster"],
        [false, "2013 - QB: Drew Brees, WR: Dez Bryant, TE: Jimmy Graham, FB: Mike Tolbert, HB: Jamaal Charles"],
        [false, "2014 - QB: Aaron Rodgers, WR: Randall Cobb, TE: Rob Gronkowski, FB: Bruce Miller, HB: Eddie Lacy"],
        [false, "2015 - QB: Tom Brady, WR: Brandon Marshall, TE: Rob Gronkowski, FB: Kyle Juszczyk, HB: Adrian Peterson"],
        [false, "2016 - QB: Aaron Rodgers, WR: Mike Evans, TE: Kyle Rudolph, FB: Jamize Olawale, HB: Ezekiel Elliott"],
        [false, "2017 - QB: Russell Wilson, WR: Michael Thomas, TE: Zach Ertz, FB: Mike Tolbert, HB: LeSeasn McCoy"],
        [false, "2018 - QB: Patrick Mahomes, WR: Julio Jones, TE: Zach Ertz, FB: James Develin, HB: Todd Gurley"],
        [false, "2019 - QB: Lamar Jackson, WR: Kenny Golladay, TE: Travis Kelce, FB: Kyle Juszczyk, HB: Ezekiel Elliott"]
      ]
    }
  ]

export default projectData; 
export type { ProjectDataType };