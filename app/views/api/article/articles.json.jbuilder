json.data @article do |article|
    json.extract! article,*(Article::Main.attribute_names)
end
json.page do
json.current @page
json.pageSize @pageSize
json.total @total
end