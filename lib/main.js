$(document).foundation();

var userFeed = new Instafeed({
  get: 'user',
  userId: 420522405,
  accessToken: '420522405.467ede5.39db080a5bda4e67812d7a1c94933d54'
});
userFeed.run();
