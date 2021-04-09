# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


50.times do
  Sale.create(beer: Faker::Beer.brand, 
              amount: rand(1_000..10_000), 
              date_time: Faker::Date.between(from: 1.year.ago, to: Date.today))
end