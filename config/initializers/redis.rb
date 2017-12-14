require 'redis'
require 'redis-namespace'
require 'redis/objects'

redis_config = Rails.application.config_for(:redis)

$redis = Redis.new(host: redis_config['host'], port: redis_config['port'])
$redis.select(0)
Redis::Objects.redis = $redis