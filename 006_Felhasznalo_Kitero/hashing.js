const bcrypt = require('bcrypt');

/*bcrypt.hash('teszt', 10, function(error, eredmeny) {
	console.log(eredmeny);
});*/

bcrypt.compare('teszt', '$2b$10$atltx2PZQMuXzJIRdj8b2u.RrgF/3/UrfibZjDDBjd9.LnXtZeO3y', function(error, eredmeny) {
	console.log(eredmeny);
});

// 