import Campaigns from "@/Utils/types/Campaign-Type"

export async function GET(request: Request) { 
  const ExampleCampaign : Campaigns[] = [{
    Name : "Bill",
    ImageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20lV8NqLaNPmfluQ7464CFgowl6vHmNeHwQ&s"
  },
{
    Name : "Bill",
    ImageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20lV8NqLaNPmfluQ7464CFgowl6vHmNeHwQ&s"
  },
{
    Name : "Bill",
    ImageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20lV8NqLaNPmfluQ7464CFgowl6vHmNeHwQ&s"
  },
{
    Name : "Bill",
    ImageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20lV8NqLaNPmfluQ7464CFgowl6vHmNeHwQ&s"
  },
{
    Name : "Bill",
    ImageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20lV8NqLaNPmfluQ7464CFgowl6vHmNeHwQ&s"
  },
{
    Name : "Bill",
    ImageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20lV8NqLaNPmfluQ7464CFgowl6vHmNeHwQ&s"
  },
]
  return Response.json(ExampleCampaign)
  
}
