// Chapter-specific content for the Socratic tutors. Shared rules live in build-chapters.mjs.
export const chapters = [
{ n: 1, slug: "ch1", topic: "Managerial Accounting and Cost Concepts",
  subtitle: "Practice cost classifications, product and period costs, cost of goods manufactured, and cost behavior with a tutor that asks you questions instead of giving you the answers.",
  blurb: "Cost classifications, product vs. period costs, cost of goods manufactured, and the high-low method",
  menu: ["Cost classifications (direct/indirect, variable/fixed, product/period)","Unit product cost, prime cost, and conversion cost","Schedule of cost of goods manufactured","Cost of goods sold and the manufacturer's income statement","Cost behavior and the high-low method","Opportunity costs, sunk costs, and differential costs"],
  formulas: [
"Direct materials used = Beginning raw materials + Purchases - Ending raw materials",
"Total manufacturing cost = Direct materials used + Direct labor + Manufacturing overhead",
"Cost of goods manufactured = Total manufacturing cost + Beginning work in process - Ending work in process",
"Cost of goods sold = Beginning finished goods + Cost of goods manufactured - Ending finished goods",
"Gross margin = Sales - Cost of goods sold. Net operating income = Gross margin - Selling and administrative expenses",
"Prime cost = Direct materials + Direct labor. Conversion cost = Direct labor + Manufacturing overhead",
"Product costs (absorption view) = direct materials, direct labor, manufacturing overhead. Period costs = selling and administrative expenses",
"High-low method: Variable cost per unit = (Cost at high activity - Cost at low activity) / (High activity - Low activity). Fixed cost = Total cost at either level - Variable cost per unit x activity at that level",
"Total cost = Fixed cost + (Variable cost per unit x Activity)"],
  errors: [
"Treating selling and administrative costs as product costs, or factory costs as period costs.",
"Using purchases instead of materials used in the schedule of cost of goods manufactured.",
"Confusing cost of goods manufactured with cost of goods sold, or forgetting the work in process and finished goods adjustments.",
"Placing direct labor in conversion cost only, or leaving it out of prime cost.",
"High-low: choosing the highest and lowest COST instead of the highest and lowest ACTIVITY; mixing up which cost goes with which level.",
"Treating a fixed cost as if the per-unit amount stays constant when volume changes (it is fixed in total, not per unit).",
"Calling a sunk cost relevant, or ignoring an opportunity cost."],
  problems: `Problem 1, Cost of goods manufactured and sold.
A manufacturer reports: beginning raw materials $20,000; purchases of raw materials $90,000; ending raw materials $15,000; direct labor $60,000; manufacturing overhead $80,000; beginning work in process $10,000; ending work in process $14,000. Compute direct materials used, total manufacturing cost, and cost of goods manufactured.
Solution: Direct materials used = 20,000 + 90,000 - 15,000 = $95,000. Total manufacturing cost = 95,000 + 60,000 + 80,000 = $235,000. Cost of goods manufactured = 235,000 + 10,000 - 14,000 = $231,000.

Problem 2, Cost of goods sold and income (continues Problem 1).
Beginning finished goods are $30,000 and ending finished goods are $26,000. Sales are $400,000 and selling and administrative expenses are $100,000. Find cost of goods sold, gross margin, and net operating income.
Solution: Cost of goods sold = 30,000 + 231,000 - 26,000 = $235,000. Gross margin = 400,000 - 235,000 = $165,000. Net operating income = 165,000 - 100,000 = $65,000.

Problem 3, Unit costs.
A company makes 10,000 units. Per unit: direct materials $12, direct labor $8, variable manufacturing overhead $5. Fixed manufacturing overhead is $120,000 for the period. Find the unit product cost, the prime cost per unit, and the conversion cost per unit.
Solution: Fixed overhead per unit = 120,000 / 10,000 = $12. Unit product cost = 12 + 8 + 5 + 12 = $37. Prime cost = 12 + 8 = $20. Conversion cost = 8 + 5 + 12 = $25. Follow-up: if production were 12,000 units, fixed overhead per unit would be $10 (fixed in total, not per unit), so unit product cost would be $35.

Problem 4, High-low method.
Maintenance cost was $54,000 at 8,000 machine hours (highest activity) and $34,000 at 4,000 machine hours (lowest activity). Estimate the variable cost per machine hour, the fixed cost, and the cost at 6,000 hours.
Solution: Variable rate = (54,000 - 34,000) / (8,000 - 4,000) = $5 per hour. Fixed cost = 54,000 - (8,000 x 5) = $14,000 (check at low: 34,000 - 20,000 = 14,000). Cost at 6,000 hours = 14,000 + 30,000 = $44,000.

Problem 5, Classification (conceptual, no single numeric answer).
Have the student classify: factory supervisor salary, sales commissions, wood used in a table, depreciation on factory equipment, the CEO's salary, and a cost already spent on a machine that will be replaced. Expected: factory supervisor salary is manufacturing overhead, indirect, fixed, product cost; sales commissions are selling expense, variable, period cost; wood used is direct material, variable, product cost; factory equipment depreciation is manufacturing overhead, fixed, product cost; CEO salary is administrative, fixed, period cost; the old machine's purchase price is a sunk cost and is not relevant to the replacement decision.`
},
{ n: 3, slug: "ch3", topic: "Job-Order Costing",
  subtitle: "Practice predetermined overhead rates, job cost sheets, and over- or underapplied overhead with a tutor that asks you questions instead of giving you the answers.",
  blurb: "Predetermined overhead rates, job cost sheets, pricing, and over- or underapplied overhead",
  menu: ["Predetermined overhead rate","Applying overhead to jobs","Job cost sheets and unit cost","Pricing a job (cost-plus markup)","Overapplied and underapplied overhead","Disposing of the overhead variance","Flow of costs (journal entries, work in process, finished goods)"],
  formulas: [
"Predetermined overhead rate = Estimated total manufacturing overhead / Estimated total amount of the allocation base (direct labor hours, direct labor cost, or machine hours)",
"Overhead applied to a job = Predetermined overhead rate x Actual amount of the allocation base used by the job",
"Job cost = Direct materials + Direct labor + Manufacturing overhead applied",
"Unit cost = Total job cost / Units in the job",
"Overhead applied minus actual overhead = Overapplied (positive) or underapplied (negative) overhead",
"Overapplied overhead decreases cost of goods sold; underapplied overhead increases it (simple method). Proportional method spreads it over Work in Process, Finished Goods, and Cost of Goods Sold in proportion to the overhead already applied or to ending balances, as your course specifies",
"Selling price with a markup on cost = Job cost x (1 + Markup percentage)",
"Overhead rate as a percent of direct labor cost = Estimated overhead / Estimated direct labor cost"],
  errors: [
"Using ACTUAL overhead instead of the predetermined rate to apply overhead.",
"Using estimated base hours instead of the job's actual hours when applying overhead.",
"Mixing the allocation base (dividing by direct labor hours but then multiplying by machine hours).",
"Reversing the sign of the variance: calling it underapplied when applied is greater than actual.",
"Adjusting cost of goods sold in the wrong direction.",
"Including selling and administrative costs in the job cost.",
"Forgetting that raw materials are only a job cost when they are DIRECT and requisitioned to the job."],
  problems: `Problem 1, Predetermined rate.
Estimated manufacturing overhead for the year is $360,000 and estimated direct labor hours are 24,000. Find the predetermined overhead rate.
Solution: 360,000 / 24,000 = $15 per direct labor hour.

Problem 2, Job cost and price (uses the $15 rate).
Job 101 (50 units) used direct materials of $4,200 and 60 direct labor hours at $20 per hour. Find the total job cost, the cost per unit, and the selling price if the markup is 40% of cost.
Solution: Direct labor = 60 x 20 = $1,200. Overhead applied = 60 x 15 = $900. Total job cost = 4,200 + 1,200 + 900 = $6,300. Cost per unit = 6,300 / 50 = $126. Price = 6,300 x 1.40 = $8,820, or $176.40 per unit.

Problem 3, Over/underapplied overhead.
Actual overhead for the year is $372,000 and actual direct labor hours are 25,000 (rate $15 per hour). Is overhead overapplied or underapplied, and by how much?
Solution: Applied = 25,000 x 15 = $375,000. Applied 375,000 minus actual 372,000 = $3,000 overapplied.

Problem 4, Disposing of the variance (continues Problem 3).
Before adjustment, Cost of Goods Sold is $400,000, Finished Goods is $60,000, and Work in Process is $40,000. How is the $3,000 handled (a) if closed entirely to Cost of Goods Sold, and (b) under the proportional method using these balances?
Solution: (a) Cost of goods sold decreases by $3,000 to $397,000, because overapplied overhead means costs were overstated. (b) Total balances = 500,000. Work in Process reduced by 240, Finished Goods by 360, Cost of Goods Sold by 2,400. Total 3,000.

Problem 5, Machine-hour rate.
A plant estimates overhead of $480,000 and 40,000 machine hours. A job uses 150 machine hours. How much overhead is applied?
Solution: Rate = 480,000 / 40,000 = $12 per machine hour. Applied = 150 x 12 = $1,800.

Problem 6, Overhead as a percent of direct labor cost.
Estimated overhead is $300,000 and estimated direct labor cost is $200,000. Job A (finished and sold) used materials of $5,000 and direct labor of $2,000. Job B (unfinished) used materials of $3,000 and direct labor of $1,000. Find the cost of Job A, and the ending Work in Process.
Solution: Rate = 150% of direct labor cost. Job A: overhead 3,000; cost = 5,000 + 2,000 + 3,000 = $10,000. Job B: overhead 1,500; cost = 3,000 + 1,000 + 1,500 = $5,500, which is ending Work in Process. Cost of goods manufactured is $10,000.`
},
{ n: 4, slug: "ch4", topic: "Variable Costing and Segment Reporting",
  subtitle: "Practice variable vs. absorption costing, reconciling income, and segment margins with a tutor that asks you questions instead of giving you the answers.",
  blurb: "Variable vs. absorption costing, income reconciliation, and segment margin reports",
  menu: ["Unit product cost under absorption vs. variable costing","Income statement: absorption costing","Income statement: variable (contribution) costing","Reconciling the two net operating incomes","Effect of production vs. sales on income","Segment reports: contribution margin and segment margin","Allocated common costs and keep/drop thinking"],
  formulas: [
"Absorption unit cost = Direct materials + Direct labor + Variable manufacturing overhead + Fixed manufacturing overhead per unit",
"Variable costing unit cost = Direct materials + Direct labor + Variable manufacturing overhead (fixed manufacturing overhead is a period cost)",
"Fixed manufacturing overhead per unit = Total fixed manufacturing overhead / Units produced",
"Absorption format: Sales - Cost of goods sold = Gross margin; Gross margin - Selling and administrative expenses = Net operating income",
"Contribution format: Sales - Variable expenses (production and selling/admin) = Contribution margin; Contribution margin - Fixed expenses = Net operating income",
"Reconciliation: Variable costing NOI - Absorption costing NOI = Fixed manufacturing overhead released from inventory - Fixed manufacturing overhead deferred in inventory",
"Fixed overhead deferred in inventory = Change in inventory units x Fixed overhead per unit",
"Production > Sales: absorption NOI is higher. Production < Sales: variable costing NOI is higher. Production = Sales: the two are equal",
"Segment margin = Segment contribution margin - Traceable fixed expenses. Company NOI = Total segment margins - Common fixed expenses"],
  errors: [
"Treating fixed manufacturing overhead as a product cost under variable costing.",
"Including variable selling and administrative expenses in variable costing unit cost (they are variable expenses on the income statement, not product cost).",
"Using the wrong sign in the reconciliation (which method is higher depends on production vs. sales).",
"Calculating fixed overhead per unit using units SOLD instead of units PRODUCED.",
"Allocating common fixed costs to segments when computing segment margin.",
"Confusing a segment's contribution margin with its segment margin.",
"Concluding a segment should be dropped because allocated common costs make it look unprofitable."],
  problems: `Company C data for problems 1 to 3: Selling price $50 per unit; direct materials $10, direct labor $6, variable manufacturing overhead $4 per unit; variable selling and administrative $3 per unit; fixed manufacturing overhead $90,000; fixed selling and administrative $40,000. Year 1: no beginning inventory, 10,000 units produced, 8,000 units sold.

Problem 1, Unit costs.
Find the unit product cost under absorption costing and under variable costing.
Solution: Fixed overhead per unit = 90,000 / 10,000 = $9. Absorption = 10 + 6 + 4 + 9 = $29. Variable costing = 10 + 6 + 4 = $20.

Problem 2, Income statements for Year 1.
Compute net operating income under each method.
Solution: Absorption: sales 400,000; cost of goods sold 8,000 x 29 = 232,000; gross margin 168,000; selling and administrative = 8,000 x 3 + 40,000 = 64,000; NOI = $104,000. Variable: sales 400,000; variable expenses = 8,000 x 20 + 8,000 x 3 = 184,000; contribution margin 216,000; fixed expenses = 90,000 + 40,000 = 130,000; NOI = $86,000.

Problem 3, Reconciliation.
Explain the $18,000 difference.
Solution: Inventory increased by 2,000 units. Fixed overhead deferred in inventory = 2,000 x 9 = $18,000. Absorption NOI is higher by that amount because production exceeded sales.

Problem 4, Year 2 (same costs, no change in prices).
Year 2: 10,000 units produced, 12,000 units sold (ending inventory 0; beginning inventory 2,000 units at $29 absorption). Find NOI under each method and the difference.
Solution: Variable: contribution margin per unit = 50 - 20 - 3 = 27; 12,000 x 27 = 324,000; minus 130,000 = $194,000. Absorption: sales 600,000; cost of goods sold = 12,000 x 29 = 348,000; gross margin 252,000; selling and administrative = 36,000 + 40,000 = 76,000; NOI = $176,000. Variable is higher by $18,000, the fixed overhead released from beginning inventory.

Problem 5, Segment report (Company D).
East: sales $300,000, variable expenses $180,000, traceable fixed expenses $70,000. West: sales $200,000, variable expenses $100,000, traceable fixed expenses $60,000. Common fixed expenses are $50,000. Find each segment's contribution margin, CM ratio, and segment margin, and the company's net operating income.
Solution: East CM $120,000 (40%), segment margin $50,000. West CM $100,000 (50%), segment margin $40,000. Total segment margin $90,000; less common fixed $50,000 = company NOI $40,000.

Problem 6, Segment thinking.
If West's sales fall by $20,000 with no change in fixed expenses, what happens to West's segment margin and company NOI? Should common costs be allocated before judging West?
Solution: West loses CM of 20,000 x 50% = $10,000, so segment margin falls to $30,000 and company NOI falls to $30,000. Common costs are not allocated because they would not disappear if West were dropped.`
},
{ n: 5, slug: "ch5", topic: "Activity-Based Costing",
  subtitle: "Practice activity rates, assigning overhead with ABC, comparing it with traditional costing, and customer profitability with a tutor that asks you questions instead of giving you the answers.",
  blurb: "Activity rates, ABC vs. traditional costing, customer margins, and unused capacity",
  menu: ["Activity cost pools and activity rates","Assigning overhead to products with ABC","ABC vs. a plant-wide (traditional) rate","Activity hierarchy (unit, batch, product, organization-sustaining)","Customer or segment profitability with ABC","Unused capacity costs","When ABC is useful and its limitations"],
  formulas: [
"Activity rate = Total cost in the activity cost pool / Total expected activity for the pool",
"Overhead assigned to a product = Sum over activities of (Activity rate x Product's actual use of the activity)",
"Overhead cost per unit = Total overhead assigned to the product / Units produced",
"Plant-wide rate = Total manufacturing overhead / Total amount of a single allocation base (such as direct labor hours or machine hours)",
"Cost distortion = Traditional allocated cost minus ABC cost for the same product (positive = overcosted by the traditional system)",
"Customer margin = Sales - Cost of goods sold - Customer-related activity costs (rate x activity used by the customer)",
"Unused capacity cost = Cost of the capacity supplied - Cost of the capacity used (rate based on capacity x unused activity)",
"Activity hierarchy: Unit-level (each unit), Batch-level (each batch or setup), Product-level (each product line), Customer-level, Organization-sustaining (not traceable)"],
  errors: [
"Dividing a pool's cost by the wrong activity measure (for example, dividing setup cost by machine hours).",
"Assigning pool costs using total volume rather than each product's use of that activity.",
"Forgetting that total assigned cost must equal total pool cost (a quick check).",
"Dividing by units sold when computing per-unit overhead instead of units produced.",
"Treating organization-sustaining costs as if they should be assigned to products.",
"Assuming ABC always raises costs; it shifts costs between products.",
"In unused capacity, using the actual-activity rate instead of the practical-capacity rate."],
  problems: `Plant data for problems 1 to 3: Overhead pools: Machine setups $120,000 (400 setups expected); Purchase orders $60,000 (1,500 orders); Machining $300,000 (20,000 machine hours). Total overhead $480,000. Product X: 5,000 units, 150 setups, 500 purchase orders, 8,000 machine hours. Product Y: 10,000 units, 250 setups, 1,000 purchase orders, 12,000 machine hours.

Problem 1, Activity rates.
Find the rate for each activity.
Solution: Setups = 120,000 / 400 = $300 per setup. Purchase orders = 60,000 / 1,500 = $40 per order. Machining = 300,000 / 20,000 = $15 per machine hour.

Problem 2, ABC assignment.
Find the overhead assigned to X and to Y, and the overhead per unit of each.
Solution: X: 150 x 300 = 45,000; 500 x 40 = 20,000; 8,000 x 15 = 120,000; total $185,000, or $37.00 per unit. Y: 250 x 300 = 75,000; 1,000 x 40 = 40,000; 12,000 x 15 = 180,000; total $295,000, or $29.50 per unit. Check: 185,000 + 295,000 = 480,000.

Problem 3, Traditional comparison.
A traditional system uses a plant-wide rate based on machine hours. Find the rate, the overhead assigned and per-unit overhead for X and Y, and say which is overcosted.
Solution: Rate = 480,000 / 20,000 = $24 per machine hour. X: 8,000 x 24 = 192,000, or $38.40 per unit. Y: 12,000 x 24 = 288,000, or $28.80 per unit. The traditional system overcosts X by $7,000 (192,000 vs. 185,000) and undercosts Y by the same amount. X uses relatively fewer setups and orders than machine hours suggest.

Problem 4, Customer margin.
Customer Z: sales $80,000; cost of goods sold $52,000; 25 orders processed at $120 per order; 10 deliveries at $250 per delivery. Find the customer margin.
Solution: Order processing = 25 x 120 = 3,000. Deliveries = 10 x 250 = 2,500. Customer margin = 80,000 - 52,000 - 3,000 - 2,500 = $22,500.

Problem 5, Unused capacity.
The setup pool of $150,000 supports practical capacity of 500 setups. Only 400 setups are performed. Find the rate and the cost of unused capacity.
Solution: Rate = 150,000 / 500 = $300 per setup. Cost assigned = 400 x 300 = 120,000. Unused capacity = 150,000 - 120,000 = $30,000 (100 setups x 300).

Problem 6, Hierarchy (conceptual).
Have the student classify: direct materials per unit, machine setup, designing a product, the plant manager's salary, and maintaining a customer's account. Expected: unit-level, batch-level, product-level, organization-sustaining, customer-level.`
},
{ n: 6, slug: "ch6", topic: "Differential Analysis (relevant costs)",
  subtitle: "Practice make-or-buy, special orders, dropping a segment, constrained resources, and sell-or-process-further decisions with a tutor that asks you questions instead of giving you the answers.",
  blurb: "Relevant costs: make or buy, special orders, drop a segment, constrained resources, and sell or process further",
  menu: ["Relevant vs. irrelevant costs (sunk, avoidable, opportunity)","Make or buy (outsourcing)","Special order","Keep or drop a segment or product line","Using a constrained resource (contribution margin per limited resource unit)","Sell or process further","Adding or dropping with opportunity cost"],
  formulas: [
"A cost or revenue is relevant only if it differs between the alternatives and is in the future. Sunk costs and costs that do not differ are irrelevant.",
"Differential analysis: Differential revenue - Differential cost = Differential profit between alternatives",
"Make or buy: compare the avoidable cost of making (variable costs plus avoidable fixed costs) with the purchase price; subtract any opportunity cost or rental income from the freed capacity from the buy alternative",
"Special order incremental profit = (Special price - Variable cost per unit) x Units - Added fixed costs - Contribution margin lost on displaced regular sales",
"Drop a segment: Compare the segment's contribution margin lost with the avoidable fixed costs saved. Keep if CM lost > avoidable fixed costs saved",
"Constrained resource: CM per unit of the scarce resource = Unit CM / Units of the scarce resource per unit of product. Produce in descending order of that ratio, within demand",
"Sell or process further: Process further only if Incremental revenue > Incremental processing cost. Joint costs are sunk and irrelevant",
"Opportunity cost: the benefit given up by choosing one alternative over another"],
  errors: [
"Including allocated or unavoidable fixed costs in a make-or-buy or drop decision.",
"Including sunk costs (past purchase prices, joint costs) in the analysis.",
"Ignoring the opportunity cost of using capacity.",
"Ranking products by unit CM or CM ratio when a resource is constrained instead of by CM per unit of the scarce resource.",
"Rejecting a special order because the price is below full (average) cost.",
"Forgetting to subtract lost regular sales when a special order uses capacity that would otherwise serve regular customers.",
"Dropping a segment with a positive contribution margin that exceeds avoidable fixed costs."],
  problems: `Problem 1, Make or buy.
A company makes 20,000 units of a part per year. Per unit: direct materials $6, direct labor $4, variable overhead $3. Total fixed overhead of $100,000 is allocated to the part, of which $30,000 is avoidable if the part is bought. A supplier offers the part at $15. Should the company buy? What if the freed capacity could be rented out for $25,000?
Solution: Make relevant cost = (6 + 4 + 3) x 20,000 + 30,000 = $290,000. Buy cost = 15 x 20,000 = $300,000. Make; making is cheaper by $10,000. With rental income of $25,000, buy net cost = 300,000 - 25,000 = $275,000, which is $15,000 cheaper than making; buy.

Problem 2, Special order.
Regular price $30; variable cost $18 per unit (including variable selling); fixed costs $200,000; capacity 40,000 units; regular sales 30,000 units (idle capacity 10,000). A special order for 8,000 units is offered at $22. Should it be accepted? What if it requires $5,000 of special packaging (fixed)? What if the order were 12,000 units (with the $5,000 packaging)?
Solution: Incremental profit = (22 - 18) x 8,000 = $32,000. With packaging = 32,000 - 5,000 = $27,000 (accept). With 12,000 units: capacity is exceeded by 2,000 units, which displaces regular sales at CM of 30 - 18 = $12. Profit = 4 x 12,000 - 2,000 x 12 - 5,000 = 48,000 - 24,000 - 5,000 = $19,000 (still accept).

Problem 3, Drop a segment.
A segment has sales $500,000, variable expenses $320,000, avoidable fixed expenses $140,000, and unavoidable (allocated) fixed expenses $60,000. Should it be dropped?
Solution: Contribution margin = $180,000. Avoidable fixed = $140,000. Dropping would lose 180,000 and save 140,000, reducing company profit by $40,000. Keep. Unavoidable fixed expenses are irrelevant.

Problem 4, Constrained resource.
Machine hours available: 1,200. Product P: unit CM $24, 3 hours, demand 300 units. Product Q: unit CM $20, 2 hours, demand 400 units. Product R: unit CM $18, 1 hour, demand 500 units. What production plan maximizes profit, and what is the total CM?
Solution: CM per hour: P $8, Q $10, R $18. Make R first: 500 units (500 hours). Then Q with 700 remaining hours: 350 units (demand 400 not met). P: 0 units. Total CM = 500 x 18 + 350 x 20 = 9,000 + 7,000 = $16,000.

Problem 5, Sell or process further.
A joint process yields 10,000 units that sell for $40 at the split-off point. Further processing costs $5 per unit and the product would then sell for $48. Joint cost is $250,000. Should the company process further?
Solution: Incremental revenue = 8 x 10,000 = 80,000; incremental cost = 5 x 10,000 = 50,000. Process further; profit improves by $30,000. The $250,000 joint cost is irrelevant.`
},
{ n: 8, slug: "ch8", topic: "Master Budgeting",
  subtitle: "Practice sales, production, purchases, labor, and cash budgets with a tutor that asks you questions instead of giving you the answers.",
  blurb: "Sales, production, direct materials, direct labor, and cash budgets",
  menu: ["Sales budget and schedule of cash collections","Production budget","Direct materials budget (purchases)","Direct labor budget","Cash budget and financing needs","How the budgets link to each other (master budget)"],
  formulas: [
"Cash collections in a month = Collections on current sales + Collections on prior months' credit sales, using the collection pattern given",
"Required production = Budgeted unit sales + Desired ending finished goods inventory - Beginning finished goods inventory",
"Required purchases of materials = Production needs for materials + Desired ending materials inventory - Beginning materials inventory",
"Production needs for materials = Units to be produced x Materials per unit",
"Direct labor hours needed = Units to be produced x Labor hours per unit. Direct labor cost = Hours x Rate per hour",
"Cash available before financing = Beginning cash balance + Cash collections - Cash disbursements",
"Excess or deficiency = Cash available - Minimum cash balance required. Borrow (in the required multiples) if there is a deficiency; repay if there is an excess and a loan exists",
"Ending cash balance = Cash available + Borrowings - Repayments (including interest)",
"Master budget order: sales -> production -> direct materials, direct labor, overhead -> selling and administrative -> cash budget -> budgeted financial statements"],
  errors: [
"Using the wrong month's sales for desired ending inventory (it is based on the NEXT month's sales or production, as specified).",
"Mixing up beginning and ending inventories when computing production or purchases.",
"Putting non-cash items (such as depreciation) in the cash disbursements.",
"Forgetting that beginning inventory of one month equals the ending inventory of the previous month.",
"Collecting the same sale twice, or collecting the wrong percentage in the wrong month.",
"Borrowing the exact deficiency instead of the required multiple, or ignoring the minimum cash balance.",
"Basing the direct labor budget on sales units instead of production units."],
  problems: `Problem 1, Cash collections.
Credit sales: January $100,000; February $120,000; March $150,000; April $130,000. Collections are 60% in the month of sale and 40% in the following month. Find collections in February and in March.
Solution: February = 0.60 x 120,000 + 0.40 x 100,000 = 72,000 + 40,000 = $112,000. March = 0.60 x 150,000 + 0.40 x 120,000 = 90,000 + 48,000 = $138,000.

Problem 2, Production budget.
Unit sales: January 1,000; February 1,200; March 1,500; April 1,300. Desired ending inventory is 20% of next month's unit sales. Find required production for February and for March.
Solution: February = 1,200 + 0.20 x 1,500 - 0.20 x 1,200 = 1,200 + 300 - 240 = 1,260 units. March = 1,500 + 0.20 x 1,300 - 0.20 x 1,500 = 1,500 + 260 - 300 = 1,460 units.

Problem 3, Direct materials purchases.
Each unit needs 3 pounds of material costing $2 per pound. Desired ending materials inventory is 10% of the next month's production needs. March production is 1,460 units (from Problem 2); April production is budgeted at 1,400 units. Find March purchases in pounds and dollars.
Solution: March needs = 1,460 x 3 = 4,380 pounds. Ending inventory = 0.10 x (1,400 x 3) = 420. Beginning inventory = 0.10 x 4,380 = 438. Purchases = 4,380 + 420 - 438 = 4,362 pounds, or 4,362 x 2 = $8,724.

Problem 4, Direct labor.
Each unit requires 0.5 direct labor hours at $18 per hour. Find the direct labor cost in February (production 1,260 units).
Solution: Hours = 1,260 x 0.5 = 630. Cost = 630 x 18 = $11,340.

Problem 5, Cash budget.
Beginning cash is $15,000. March collections are $138,000 (Problem 1). March disbursements for operations are $120,000, and $30,000 of equipment is purchased. The minimum cash balance is $20,000. The company borrows in multiples of $10,000. Find the cash available before financing, the borrowing needed, and the ending cash.
Solution: Cash available = 15,000 + 138,000 - 120,000 - 30,000 = $3,000. Deficiency vs. minimum = 20,000 - 3,000 = 17,000, so borrow $20,000 (next multiple of 10,000). Ending cash = 3,000 + 20,000 = $23,000.`
},
{ n: 9, slug: "ch9", topic: "Flexible Budgets and Performance Analysis",
  subtitle: "Practice flexible budgets, activity variances, and revenue and spending variances with a tutor that asks you questions instead of giving you the answers.",
  blurb: "Flexible budgets, activity and spending variances, and fair performance reports",
  menu: ["Cost behavior and flexible budget formulas","Building a flexible budget","Activity variance (planning budget vs. flexible budget)","Revenue and spending variances (flexible budget vs. actual)","Why static budgets mislead performance evaluation","Interpreting favorable and unfavorable variances"],
  formulas: [
"Flexible budget amount = Fixed cost + (Variable cost per unit x Actual activity), for each cost; Revenue = Selling price x Actual units",
"Cost formula for a mixed cost: Y = a + bX (a = fixed amount, b = variable rate, X = activity)",
"Activity variance = Flexible budget - Planning (static) budget (shows the effect of a change in volume)",
"Revenue variance = Actual revenue - Flexible budget revenue (favorable if actual is higher)",
"Spending variance (for a cost) = Actual cost - Flexible budget cost (favorable if actual is lower)",
"Total variance = Activity variance + Revenue and spending variances = Actual NOI - Planning budget NOI",
"Favorable (F) and unfavorable (U): a variance is F if it increases net operating income compared with the budget",
"Planning budget is based on the activity expected when the budget was set; flexible budget is based on the activity actually achieved"],
  errors: [
"Comparing actual results directly with the static budget when actual activity differs.",
"Flexing fixed costs along with volume (fixed costs do not change within the relevant range).",
"Mislabeling a cost variance F or U (for costs, actual above flexible budget is unfavorable).",
"Using actual selling price when building the flexible budget revenue (it uses the budgeted price).",
"Adding variances with mixed-up signs.",
"Using the planning-budget activity rather than actual activity in the flexible budget."],
  problems: `Company E: Planning budget is for 10,000 units: selling price $20 per unit; variable expenses $9 per unit; fixed expenses $60,000. Actual results for the period: 11,000 units sold; revenue $224,000; variable expenses $105,000; fixed expenses $63,000.

Problem 1, Planning budget and flexible budget.
Find net operating income in the planning budget and in the flexible budget at 11,000 units.
Solution: Planning budget NOI = 200,000 - 90,000 - 60,000 = $50,000. Flexible budget: revenue 220,000; variable expenses 99,000; fixed 60,000; NOI = $61,000.

Problem 2, Actual NOI and variances.
Find actual NOI, the activity variance, the revenue variance, the spending variance on variable expenses, and the spending variance on fixed expenses.
Solution: Actual NOI = 224,000 - 105,000 - 63,000 = $56,000. Activity variance = 61,000 - 50,000 = $11,000 F. Revenue variance = 224,000 - 220,000 = $4,000 F. Variable spending variance = 105,000 - 99,000 = $6,000 U. Fixed spending variance = 63,000 - 60,000 = $3,000 U.

Problem 3, Reconcile.
Show how the variances explain the difference between planning budget NOI and actual NOI.
Solution: 11,000 F + 4,000 F - 6,000 U - 3,000 U = $6,000 F, and 56,000 - 50,000 = $6,000.

Problem 4, Why not the static budget?
A manager sees variable expenses of $105,000 vs. $90,000 in the planning budget. Is this a $15,000 spending problem?
Solution: No. About $9,000 of the $15,000 difference is simply due to selling 1,000 more units (1,000 x $9). The true spending variance is $6,000 U. Fixed costs are not flexed.

Problem 5, Mixed cost.
Utilities cost is $5,000 per month plus $2 per machine hour. Actual machine hours were 3,000 and actual cost $11,800. Find the flexible budget amount and the spending variance.
Solution: Flexible budget = 5,000 + 2 x 3,000 = $11,000. Spending variance = 11,800 - 11,000 = $800 U.

Problem 6, Flexible budget at other levels.
Using Company E's cost structure, find budgeted NOI at 8,000 units and 12,000 units.
Solution: Unit CM = 20 - 9 = 11. At 8,000 units: 88,000 - 60,000 = $28,000. At 12,000 units: 132,000 - 60,000 = $72,000.`
},
{ n: 10, slug: "ch10", topic: "Standard Costs and Variances",
  subtitle: "Practice standard cost cards and direct materials, direct labor, and variable overhead variances with a tutor that asks you questions instead of giving you the answers.",
  blurb: "Standard cost cards and direct materials, direct labor, and variable overhead variances",
  menu: ["Standard cost per unit (the standard cost card)","Direct materials price and quantity variances","Direct labor rate and efficiency variances","Variable manufacturing overhead spending and efficiency variances","Who is responsible for each variance","Interpreting favorable and unfavorable variances"],
  formulas: [
"Standard cost per unit = (Standard quantity x Standard price) summed over materials, labor, and variable overhead",
"Standard quantity allowed (SQ) = Actual output x Standard quantity per unit",
"Materials price variance = (Actual price - Standard price) x Actual quantity purchased",
"Materials quantity variance = (Actual quantity used - Standard quantity allowed) x Standard price",
"Labor rate variance = (Actual rate - Standard rate) x Actual hours",
"Labor efficiency variance = (Actual hours - Standard hours allowed) x Standard rate",
"Variable overhead spending variance = Actual variable overhead - (Actual hours x Standard rate)",
"Variable overhead efficiency variance = (Actual hours - Standard hours allowed) x Standard variable overhead rate",
"A variance is unfavorable (U) when the actual price or quantity exceeds the standard, and favorable (F) when below",
"Total variance for an input = Price (or rate or spending) variance + Quantity (or efficiency) variance"],
  errors: [
"Using actual quantity PURCHASED in the quantity variance (it uses quantity USED), or quantity used in the price variance (it uses quantity PURCHASED).",
"Computing the standard quantity from actual input instead of actual OUTPUT.",
"Using the actual price in the quantity variance (the standard price is used).",
"Mislabeling the sign: actual above standard is unfavorable for costs.",
"Mixing up labor rate (price) and efficiency (quantity) variances.",
"Using the standard hours for the budgeted output rather than the actual output.",
"Blaming the production manager for a materials price variance (the purchasing manager usually controls price)."],
  problems: `Standard cost card (per unit): Direct materials 4 pounds at $5 per pound; direct labor 2.5 hours at $16 per hour; variable overhead 2.5 hours at $4 per direct labor hour. Actual results: 2,000 units produced; 9,000 pounds of material purchased at $5.20 per pound; 8,200 pounds used; 5,200 direct labor hours worked at $15.50 per hour; actual variable overhead $22,000.

Problem 1, Standard cost per unit.
Compute the standard cost per unit.
Solution: Materials 4 x 5 = $20; labor 2.5 x 16 = $40; variable overhead 2.5 x 4 = $10. Total = $70.

Problem 2, Materials variances.
Find the materials price variance and the materials quantity variance.
Solution: Price variance = (5.20 - 5.00) x 9,000 = $1,800 U. Standard quantity allowed = 2,000 x 4 = 8,000 pounds. Quantity variance = (8,200 - 8,000) x 5 = $1,000 U.

Problem 3, Labor variances.
Find the labor rate variance and the labor efficiency variance.
Solution: Rate variance = (15.50 - 16.00) x 5,200 = $2,600 F. Standard hours allowed = 2,000 x 2.5 = 5,000. Efficiency variance = (5,200 - 5,000) x 16 = $3,200 U.

Problem 4, Variable overhead variances.
Find the variable overhead spending and efficiency variances.
Solution: Spending variance = 22,000 - (5,200 x 4) = 22,000 - 20,800 = $1,200 U. Efficiency variance = (5,200 - 5,000) x 4 = $800 U.

Problem 5, Interpretation.
Ask the student who is likely responsible for the materials price variance, and what might cause the favorable labor rate variance together with the unfavorable efficiency variance.
Solution (discussion): Purchasing manager for the price variance. A favorable rate with unfavorable efficiency may mean lower-paid, less experienced workers were used who took more time. Variances should be investigated rather than assumed to be good or bad.`
},
{ n: 12, slug: "ch12", topic: "Strategic Performance Measurement",
  subtitle: "Practice the balanced scorecard, delivery time measures, overall equipment effectiveness, and cost of quality with a tutor that asks you questions instead of giving you the answers.",
  blurb: "Balanced scorecard, throughput time and MCE, overall equipment effectiveness, and cost of quality",
  menu: ["Balanced scorecard perspectives and measures","Throughput time and delivery cycle time","Manufacturing cycle efficiency (MCE)","Overall equipment effectiveness (OEE)","Quality costs: prevention, appraisal, internal failure, external failure","Interpreting performance measures for a manager"],
  formulas: [
"Throughput (manufacturing cycle) time = Process time + Inspection time + Move time + Queue time",
"Value-added time = Process time",
"Manufacturing cycle efficiency (MCE) = Value-added time / Throughput time",
"Delivery cycle time = Wait time + Throughput time",
"Availability = (Planned production time - Downtime) / Planned production time",
"Performance = (Ideal cycle time x Total units produced) / Run time",
"Quality = Good units / Total units produced",
"Overall equipment effectiveness (OEE) = Availability x Performance x Quality",
"Quality cost categories: Prevention (training, design), Appraisal (inspection, testing), Internal failure (scrap, rework), External failure (warranty, returns, lost sales)",
"Quality cost percentage = Quality costs / Sales",
"Balanced scorecard perspectives: Financial, Customer, Internal business processes, Learning and growth"],
  errors: [
"Treating inspection, move, and queue time as value-added.",
"Including wait time in throughput time (wait time is added only for delivery cycle time).",
"Computing MCE using delivery cycle time in the denominator.",
"Multiplying OEE factors that were calculated from different bases, or computing performance with planned time instead of run time.",
"Putting rework in appraisal, or inspection in prevention.",
"Assuming more spending on prevention and appraisal always raises total quality cost; it can reduce failure costs.",
"Treating a single financial measure as a complete picture of performance."],
  problems: `Problem 1, Throughput time and MCE.
A product spends 2.0 days in process, 0.4 days in inspection, 0.6 days in moving, and 5.0 days in queues. Orders wait an average of 4 days before production starts. Find throughput time, MCE, and delivery cycle time. What if queue time falls to 1.0 day?
Solution: Throughput time = 2.0 + 0.4 + 0.6 + 5.0 = 8.0 days. MCE = 2.0 / 8.0 = 0.25 (25%). Delivery cycle time = 4 + 8 = 12 days. With queue time 1.0, throughput = 4.0 days and MCE = 2.0 / 4.0 = 0.50 (50%).

Problem 2, OEE.
A machine has planned production time of 500 minutes, downtime of 100 minutes, an ideal cycle time of 1 minute per unit, produces 360 units, of which 342 are good. Find availability, performance, quality, and OEE.
Solution: Run time = 400 minutes. Availability = 400 / 500 = 80%. Performance = (1 x 360) / 400 = 90%. Quality = 342 / 360 = 95%. OEE = 0.80 x 0.90 x 0.95 = 68.4% (check: 342 x 1 / 500 = 68.4%).

Problem 3, Quality cost report.
Prevention: training $20,000 and design review $15,000. Appraisal: inspection $40,000. Internal failure: scrap $30,000 and rework $25,000. External failure: warranty $60,000 and returns $20,000. Sales were $2,000,000. Find total quality cost for each category, in total, and as a percent of sales.
Solution: Prevention $35,000; appraisal $40,000; internal failure $55,000; external failure $80,000. Total $210,000, which is 10.5% of sales. Failure costs are 135,000 of 210,000 (about 64%), a prompt to ask whether more prevention would reduce them.

Problem 4, Balanced scorecard (conceptual).
Have the student classify: customer satisfaction rating, return on investment, defect rate, employee training hours, on-time delivery percentage. Expected: customer; financial; internal business processes; learning and growth; customer (or internal business processes, depending on how it is defined). Accept reasonable justification.`
}
];
