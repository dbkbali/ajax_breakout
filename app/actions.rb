# Homepage (Root path)

CARDS = [
  {
    name: "Pikachu",
    skill: "Thunderbolt",
    image: "http://static.giantbomb.com/uploads/scale_small/0/6087/2437349-pikachu.png",
    hp: 25,
    type: "Electric"
  },
  {
    name: "Magikarp",
    skill: "Splash",
    image: "http://static.giantbomb.com/uploads/scale_small/13/135472/1898291-129magikarp.png",
    hp: 10,
    type: "Water"
  },
  {
    name: "Jigglypuff",
    skill: "Lullaby",
    image: "http://static.giantbomb.com/uploads/scale_small/13/135472/1892299-039jigglypuff.png",
    hp: 15,
    type: "Fairy"
  }
]

get '/' do
  erb :index
end

get '/cards' do
  CARDS.to_json
end

post '/cards' do 
  params.to_json  
end
