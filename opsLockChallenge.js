const userShifts = [
	{
		start: '0600',
		end: '1000'
	},
	{
		start: '1600',
		end: '2000'
	}
];

const globalShiftList = [
	{
		start: '0000',
		end: '2359'
	},
	{
		start: '0600',
		end: '1800'
	},
	{
		start: '0000',
		end: '1200'
	},
	{
		start: '0600',
		end: '1200'
	},
	{
		start: '1800',
		end: '2359'
	},
	{
		start: '0000',
		end: '0600'
	},
	{
		start: '1200',
		end: '2359'
	},
	{
		start: '1200',
		end: '1800'
    },

];

const filterShifts = (userShifts, globalShiftList) => {
    return globalShiftList.filter(globalShift => {
       const conflictingShifts = userShifts.find(userShift => {
            if ((globalShift.end > userShift.start && globalShift.start < userShift.end ) ) {
                return true;
            }
            
        })
        if (!!conflictingShifts == false){
            return true
        }
    })
}

console.log(filterShifts(userShifts, globalShiftList));