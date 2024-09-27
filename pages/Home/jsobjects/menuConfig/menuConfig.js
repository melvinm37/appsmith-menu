export default {
// This is the JSON Object description
// Using the flaticon.es library you can find icons to add in the icon property

	items () {
		let menu_optins = [
								{
									"item" : "Appointments",
									"icon":"rr-list-check",
									"type" : "Navigation / Other",
									"navTo" : "Appointments"
								},
								{
									"item" : "Reports",
									"icon":"rr-chart-histogram",
									"type" : "Navigation / Other",
									"navTo" : "Reports"
								}
							]
		let items = 
				{
					"options" : [
						{
							"mainOption" : "Agenda",
							"icon":"rr-calendar",
							"subOptions" :  menu_optins
						},
						{
							"mainOption" : "Config",
							"icon":"rr-settings",
							"subOptions" :  [
								{
									"item" : "Users",
									"icon":"rr-user",
									"type" : "Navigation / Other",
									"navTo" : "Users"
								},
								{
									"item" : "Inbox",
									"icon":"rr-download",
									"type" : "Navigation / Other",
									"navTo" : "Inbox"
								},
								{
									"item" : "Masters",
									"icon":"rr-settings-sliders",
									"type" : "Navigation / Other",
									"navTo" : "Masters"
								}
							]
						}
					]
				};
		return items;
	}
}