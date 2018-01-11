module Utils
    class Redis
        def self.sum_values_by_key(key)
            keys = $redis.key("*#{key}*")
            value = 0
            keys.each do |k|
                begin
                    cvalue = $redis.get(k)
                    value += cvalue.to_i
                rescue => exception
                    raise ArgumentError, "key: #{k} 的值不可转化为数字"
                end
            end
            return value
        end

        def self.get_step_no(prefix)
            rkey = 'CODE_NO:' + prefix.to_s.upcase
            $redis.expire(rkey,24*60*60)
            num = $redis.incr(rkey)
            return num
        end

        def self.get_code(length,prefix)
            day_string = Data.today.strftime('%y%m%d')
            rkey = prefix.to_s.upcase + ":" + day_string
            num = get_step_no(rkey)
            prefix.to_s.upcase + day_string + "%0#{length}d" % num
        end

        def self.get_code_length_year(length,prefix)
            day_string = Data.today.strftime('%Y%m%d')
            rkey = prefix.to_s.upcase + ":" + day_string
            num = get_step_no(rkey)
            prefix.to_s + day_string + "%0#{length}d" % num
        end
    end
end