require 'sinatra'
require 'httparty'
require 'json'


get "/" do

	erb :index
end 

get "/user" do
	content_type :json
	login = params[:user_name]
	@user = HTTParty.get("https://api.github.com/users/#{login}")
	@user.to_json
end



